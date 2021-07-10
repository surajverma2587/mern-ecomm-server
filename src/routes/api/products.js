const { Router } = require("express");

const {
  getProduct,
  getAllProducts,
} = require("../../controllers/api/products");

const router = Router();

router.get("/:id", getProduct);

router.get("/", getAllProducts);

module.exports = router;
