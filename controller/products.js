const { response } = require("express");

const Product = require("../models/product");
const User = require("../models/User");

// Get all products
const getProducts = async (req, res = response) => {
  // params for pagination
  const { limit = 5, from = 0 } = req.query;
  const query = { state: true };

  // Execute booth promises at the same time
  const [total, products] = await Promise.all([
    // Get count of users
    Product.countDocuments(query),
    // Get all users with limits
    Product.find(query).populate("user", "nombre").limit(limit).skip(from),
  ]);

  res.json({
    total,
    products,
  });
};

// Get one product
const getOneProduct = async (req, res = response) => {
  const id = req.params.id;
  const product = await Product.findById(id).populate("user", "nombre");
  if (!product.state) {
    return res.status(400).json({
      msg: `Cannot find ${id} in Database`,
    });
  }
  res.json({
    product,
  });
};

// Create product
const createProduct = async (req, res = response) => {
  const { name, price, description, img } = req.body;

  const productDB = await Product.findOne({ name });
  //   Check product in DB
  if (productDB) {
    return res.status(400).json({
      msg: `Product ${productDB.name} already exist  in Database`,
    });
  }

  //   Data to save
  const data = {
    name,
    price,
    description,
    img,
    user: req.user._id,
  };
  const product = new Product(data);

  // Save in DB
  await product.save();

  res.status(201).json({
    product,
  });
};

// update category
const updateProduct = async (req, res = response) => {
  const id = req.params.id;
  const { state, available, ...rest } = req.body;

  rest.user = req.user._id;

  const productDB = await Product.findByIdAndUpdate(id, rest);

  res.json({
    productDB,
  });
};

// Delete category
const deleteProduct = async (req, res = response) => {
  const id = req.params.id;

  // change state in DB
  const productDelete = await Product.findByIdAndUpdate(id, { state: false });
  const authenticateUser = req.user;

  res.json({
    productDelete,
    authenticateUser,
  });
};

module.exports = {
  getProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
