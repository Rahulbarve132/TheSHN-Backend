const express = require("express");
const { createProduct, getAllProducts } = require("../controllers/productController");

const router = express.Router();

router.post("/create-product", createProduct);
router.get("/get-all-product", getAllProducts);

module.exports = router;
