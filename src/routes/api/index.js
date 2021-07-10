const { Router } = require("express");

const categories = require("./categories");
const products = require("./products");

const router = Router();

router.use("/categories", categories);
router.use("/products", products);

module.exports = router;
