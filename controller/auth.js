const { response } = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const { genJWT } = require("../helpers/generate-jwt");

const loginController = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    // Verify email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: "User / Password incorrect - Email",
      });
    }

    // Verify state
    if (!user.state) {
      return res.status(400).json({
        msg: "No valid user or deleted",
      });
    }

    // verify password
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: "User / Password incorrect - Password",
      });
    }

    // Generate JWT
    const token = await genJWT(user.id);

    res.status(200).json({
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      msg: "A internal error ocurred",
    });
  }
};

module.exports = loginController;
