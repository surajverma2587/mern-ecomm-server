const { Category } = require("../../models");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});

    return res.json({ categories });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to get categories" });
  }
};

module.exports = {
  getAllCategories,
};
