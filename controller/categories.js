const { response } = require("express");

const Category = require("../models/category");
const User = require("../models/User");

// Get all category
const getCategories = async (req, res = response) => {
  // params for pagination
  const { limit = 5, from = 0 } = req.query;
  const query = { state: true };

  // Execute booth promises at the same time
  const [total, categories] = await Promise.all([
    // Get count of users
    Category.countDocuments(query),
    // Get all users with limits
    Category.find(query).populate("user", "nombre").limit(limit).skip(from),
  ]);

  res.json({
    total,
    categories,
  });
};

// Get one category
const getOneCategory = async (req, res = response) => {
  const id = req.params.id;

  const category = await Category.findById(id).populate("user", "nombre");
  if (!category.state) {
    return res.status(400).json({
      msg: `Cannot find ${id} in Database`,
    });
  }

  res.json({
    category,
  });
};

// Create category
const createCategory = async (req, res = response) => {
  const name = req.body.name.toUpperCase();

  const categoryDB = await Category.findOne({ name });

  //   Check category in DB
  if (categoryDB) {
    return res.status(400).json({
      msg: `Category ${categoryDB.name} already exist  in Database`,
    });
  }

  //   Data to be saved
  const data = {
    name,
    user: req.user._id,
  };

  //   Save category
  const category = new Category(data);

  await category.save();

  res.status(201).json({
    category,
  });
};

// update category
const updateCategory = async (req, res = response) => {
  const id = req.params.id;
  const { state, ...data } = req.body;

  data.name = data.name.toUpperCase();
  data.user = req.user._id;

  const nameDB = await Category.findOne(data);
  if (nameDB) {
    return res.status(400).json({
      msg: `Name ${data.name} is already defined`,
    });
  }

  const categoryDB = await Category.findByIdAndUpdate(id, data);

  res.json({
    categoryDB,
  });
};

// Delete category
const deleteCategory = async (req, res = response) => {
  const id = req.params.id;

  // change state in DB
  const categoryDelete = await Category.findByIdAndUpdate(id, { state: false });
  const authenticateUser = req.user;

  res.json({
    categoryDelete,
    authenticateUser,
  });
};

module.exports = {
  getCategories,
  getOneCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
