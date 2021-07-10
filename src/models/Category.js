const mongoose = require("mongoose");

const schema = {
  name: {
    type: String,
    required: true,
  },
};

const CategorySchema = new mongoose.Schema(schema);

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
