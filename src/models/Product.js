const mongoose = require("mongoose");

const schema = {
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  shortDescription: {
    type: String,
    required: false,
  },
  longDescription: {
    type: String,
    required: false,
  },
  tags: [
    {
      type: "String",
    },
  ],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
  },
};

const ProductSchema = new mongoose.Schema(schema);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
