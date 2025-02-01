const express = require("express");
const { addInventoryItem, getUnverifiedInventory, verifyInventoryItem, deleteInventoryItem, editVerifiedItemCounter } = require("../controllers/inventoryController");

const router = express.Router();

router.post("/add-inventory", addInventoryItem);
router.get("/get-all-inventory", getUnverifiedInventory);
router.delete("/:id", deleteInventoryItem);
router.patch("/edit-verified-item/:id", editVerifiedItemCounter);

module.exports = router;
