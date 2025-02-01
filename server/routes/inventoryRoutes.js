const express = require("express");
const { addInventoryItem, getUnverifiedInventory, verifyInventoryItem, deleteInventoryItem } = require("../controllers/inventoryController");

const router = express.Router();

router.post("/add-inventory", addInventoryItem);
router.get("/get-all-inventory", getUnverifiedInventory);
router.get("/:serialNumber", verifyInventoryItem);
router.delete("/:id", deleteInventoryItem);

module.exports = router;
