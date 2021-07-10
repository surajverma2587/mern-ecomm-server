const { Router } = require("express");

const { getAllCategories } = require("../../controllers/api/categories");

const router = Router();

router.get("/", getAllCategories);

module.exports = router;
