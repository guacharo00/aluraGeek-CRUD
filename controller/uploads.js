const { response } = require("express");
const path = require("path");
const fs = require("fs");

const cloudinary = require("cloudinary").v2;
cloudinary.config(process.env.CLOUDINARY_URL);

const uploadFile = require("../helpers/update-file");
const { validateFiles } = require("../middlewares/validate-file");
const Product = require("../models/product");
const User = require("../models/User");

const getFiles = async (req, res = response) => {
  const { id, collection } = req.params;

  let model;

  switch (collection) {
    case "products":
      model = await Product.findById(id);
      if (!model) {
        return res.status(200).json({
          msg: `The product id ${id} dont exist`,
        });
      }

      break;

    case "users":
      model = await User.findById(id);
      if (!model) {
        return res.status(200).json({
          msg: `The user id ${id} dont exist`,
        });
      }

      break;

    default:
      res.status(500).json({
        msg: "I forgot validate this",
      });
  }

  // Check images
  if (model.img) {
    const imgPath = path.join(__dirname, "../uploads", collection, model.img);
    if (fs.existsSync(imgPath)) {
      return res.sendFile(imgPath);
    }
  }

  const imgPath = path.join(__dirname, "../assets/no-image.jpg");
  return res.sendFile(imgPath);
};

const loadFiles = async (req, res = response) => {
  try {
    const name = await uploadFile(req.files, undefined, "products");
    res.json({
      name,
    });
  } catch (msg) {
    res.status(400).json({
      msg,
    });
  }
};

const updateImage = async (req, res = response) => {
  const { id, collection } = req.params;

  let model;

  switch (collection) {
    case "products":
      model = await Product.findById(id);
      if (!model) {
        return res.status(200).json({
          msg: `The product id ${id} dont exist`,
        });
      }

      break;

    case "users":
      model = await User.findById(id);
      if (!model) {
        return res.status(200).json({
          msg: `The user id ${id} dont exist`,
        });
      }

      break;

    default:
      res.status(500).json({
        msg: "I forgot validate this",
      });
  }

  // Clean previews images
  if (model.img) {
    const imgPath = path.join(__dirname, "../uploads", collection, model.img);
    if (fs.existsSync(imgPath)) {
      fs.unlinkSync(imgPath);
    }
  }

  const name = await uploadFile(req.files, undefined, collection);
  model.img = name;

  await model.save();

  res.json({ model });
};
const updateImageCloudinary = async (req, res = response) => {
  const { id, collection } = req.params;

  let model;

  switch (collection) {
    case "products":
      model = await Product.findById(id);
      if (!model) {
        return res.status(200).json({
          msg: `The product id ${id} dont exist`,
        });
      }

      break;

    case "users":
      model = await User.findById(id);
      if (!model) {
        return res.status(200).json({
          msg: `The user id ${id} dont exist`,
        });
      }

      break;

    default:
      res.status(500).json({
        msg: "I forgot validate this",
      });
  }

  // Clean previews images
  if (model.img) {
    const imgArr = model.img.split("/");
    const name = imgArr[imgArr.length - 1];
    const [public_id] = name.split(".");

    await cloudinary.uploader.destroy(public_id);
  }

  const { tempFilePath } = req.files.file;
  const { secure_url } = await cloudinary.uploader.upload(tempFilePath);

  model.img = secure_url;

  await model.save();

  res.json({ model });
};

module.exports = { loadFiles, updateImage, getFiles, updateImageCloudinary };
