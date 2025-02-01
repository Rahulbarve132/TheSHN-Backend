// models/Supplier.js
const mongoose = require("mongoose");

const SupplierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    number: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /\d{10}/.test(v);
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    gst: {
      type: String,
      trim: true,
      validate: {
        validator: function (v) {
          return /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/.test(v);
        },
        message: (props) => `${props.value} is not a valid GST number!`,
      },
    },
    opening_balance: {
      type: Number,
      required: true,
      default: 0,
    },
    label_series: {
      type: String,
      trim: true,
      uppercase: true,
      unique: true,
    },
    margin: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    state: {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      code: {
        type: String,
        required: true,
        trim: true,
        uppercase: true,
        minlength: 2,
        maxlength: 2,
      },
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Supplier", SupplierSchema);
