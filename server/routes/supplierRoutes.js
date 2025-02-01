const express = require("express");
const { createSupplier, getAllSuppliers } = require("../controllers/supplierController");

const router = express.Router();

router.post("/create-supplier", createSupplier);
router.get("/get-all-supplier", getAllSuppliers);

module.exports = router;
