const { Schema, model } = require("mongoose");

const ProductSchema = Schema({
  name: {
    type: String,
    required: [true, "The name is needed"],
    unique: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  img: {
    type: String,
  },
  description: {
    type: String,
    required: [true, "A description is needed"],
  },
  available: { type: String, default: true },
  state: {
    type: Boolean,
    default: true,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = model("Product", ProductSchema);
