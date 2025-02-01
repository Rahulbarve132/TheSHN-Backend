const express = require("express");
const { createSupplier, getAllSuppliers, updateSupplierOpeningBalance } = require("../controllers/supplierController");

const router = express.Router();

router.post("/create-supplier", createSupplier);
router.get("/get-all-supplier", getAllSuppliers);
router.patch("/update-opening-balance/:supplierId", updateSupplierOpeningBalance);

module.exports = router;
