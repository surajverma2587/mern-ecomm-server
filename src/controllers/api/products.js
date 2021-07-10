const { Product } = require("../../models");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({})
      .populate("category")
      .populate("shop");

    return res.json({ products });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to get products" });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id)
      .populate("category")
      .populate("shop");

    return res.json({ product });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to get product" });
  }
};

module.exports = {
  getAllProducts,
  getProduct,
};
