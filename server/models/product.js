// models/Product.js
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    default_buying_price: {
      type: Number,
      required: true,
      min: 0,
    },
    default_selling_price: {
      type: Number,
      required: true,
      min: 0,
    },
    brand_name: {
      type: String,
      required: true,
      trim: true,
    },
    category_name: {
      type: String,
      required: true,
      trim: true,
    },
    sub_category_name: {
      type: String,
      required: true,
      trim: true,
    },
    units: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },
    default_tax: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },

    description: {
      type: String,
      trim: true,
    },
    sku: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Product", ProductSchema);
