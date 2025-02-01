// models/Inventory.js
const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema(
  {
    supplier_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
      required: true,
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    color: {
      type: String,
      trim: true,
      uppercase: true,
    },
    size: {
      type: String,
      trim: true,
      uppercase: true,
    },
    buying_tax: {
      type: Number,
      required: true,
      min: 0,
      max:100,
      default: 0,
    },
    buying_price: {
      type: Number,
      required: true,
      min: 0,
    },
    margin: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    selling_tax: {
      type: Number,
      required: true,
      min: 0,
      max:100,
      default: 0,
    },
    selling_price: {
      type: Number,
      required: true,
      min: 0,
    },
    displayed_price: {
      type: Number,
      required: true,
      min: 0,
    },
    discount: {
      type: Number,
      min: 0,
      max:100,
      default: 0,
    },
    serial_no: {
      type: String,
      trim: true,
      unique: true,
      sparse: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Inventory", InventorySchema);
