const { response } = require("express");
const Product = require("../models/product");
const { ObjectId } = require("mongoose").Types;

const validCollections = ["products", "categories"];

const searchProducts = async (query, res = response) => {
  const isMongoId = ObjectId.isValid(query);

  if (isMongoId) {
    const product = await Product.findById(query);

    return res.json({
      results: product ? [product] : [],
    });
  }

  const regex = new RegExp(query, "i");

  const products = await Product.find({ name: regex });

  res.json({
    results: products,
  });
};

const search = (req, res = response) => {
  const { collection, query } = req.params;

  if (!validCollections.includes(collection)) {
    return res.status(400).json({
      msg: `This is not a valid collection: try with ${validCollections}`,
    });
  }

  switch (collection) {
    case "products":
      searchProducts(query, res);
      break;

    case "categories":
      break;

    default:
      res.status(500).json({
        msg: "This search is under construction",
      });
  }
};

module.exports = { search };
