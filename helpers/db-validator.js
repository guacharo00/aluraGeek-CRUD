// Validate role in database
const Role = require("../models/role");
const User = require("../models/User");
const Product = require("../models/product");

const validRole = async (role = "USER_ROLE") => {
  const roleExist = await Role.findOne({ role });
  if (!roleExist) {
    throw new Error(`Role ${role} is not registered on database`);
  }
};

// Validate Email
const validEmail = async (email) => {
  // Check email
  const checkEmail = await User.findOne({ email });
  if (checkEmail) {
    throw new Error(`Email already registered`);
  }
};

// validate if user id exist
const validateUserDB = async (id) => {
  const userDB = await User.findById(id);
  if (!userDB) {
    throw new Error(`Id ${id}, is not registered`);
  }
};

// validate if category id exist
const validateCategoryDB = async (id) => {
  const categoryDB = await Category.findById(id);
  if (!categoryDB) {
    throw new Error(`Id ${id}, is not registered`);
  }
};

// validate if product id exist
const validateProductDB = async (id) => {
  const productDB = await Product.findById(id);
  if (!productDB) {
    throw new Error(`Id ${id}, is not registered`);
  }
};

module.exports = {
  validRole,
  validEmail,
  validateUserDB,
  validateCategoryDB,
  validateProductDB,
};
