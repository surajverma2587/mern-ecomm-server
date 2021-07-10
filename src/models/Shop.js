const mongoose = require("mongoose");

const schema = {
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
    default: "http://via.placeholder.com/640x360",
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  instagramLink: {
    type: String,
    required: false,
  },
  facebookLink: {
    type: String,
    required: false,
  },
};

const ShopSchema = new mongoose.Schema(schema);

const Shop = mongoose.model("Shop", ShopSchema);

module.exports = Shop;
