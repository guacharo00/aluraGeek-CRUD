const { response } = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const { validEmail } = require("../helpers/db-validator");

const usersGet = async (req, res = response) => {
  // params for pagination
  const { limit = 5, from = 0 } = req.query;
  const query = { state: true };

  // Execute booth promises at the same time
  const [total, users] = await Promise.all([
    // Get count of users
    User.countDocuments(query),
    // Get all users with limits
    User.find(query).limit(limit).skip(from),
  ]);

  res.json({
    total,
    users,
  });
};

const usersPost = async (req, res = response) => {
  const { nombre, email, password, role = "USER_ROLE", img } = req.body;
  const user = new User({ nombre, email, password, role, img });

  // Encrypt password
  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(password, salt);

  // Save in DB
  await user.save();

  res.json({
    user,
  });
};

const usersPut = async (req, res = response) => {
  const id = req.params.id;
  const { _id, password, google, role, ...rest } = req.body;

  if (password) {
    // Encrypt password
    const salt = bcrypt.genSaltSync();
    rest.password = bcrypt.hashSync(password, salt);
  }

  const userDB = await User.findByIdAndUpdate(id, rest);

  res.json({
    userDB,
  });
};

const usersDelete = async (req, res = response) => {
  const id = req.params.id;

  // change state in DB
  const userDelete = await User.findByIdAndUpdate(id, { state: false });
  const authenticateUser = req.user;

  res.json({ userDelete, authenticateUser });
};

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersDelete,
};
