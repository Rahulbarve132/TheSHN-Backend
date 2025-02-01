const Supplier = require("../models/Supplier");

exports.createSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.create(req.body);
    res.status(201).json({
      success: true,
      message: "Supplier created successfully",
      supplier,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find({});
    res.status(200).json({
      success: true,
      message: "Suppliers retrieved successfully",
      suppliers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateSupplierOpeningBalance = async (req, res) => {
  try {
    const { supplierId } = req.params;
    const { opening_balance } = req.body;

    const updatedSupplier = await Supplier.findByIdAndUpdate(
      supplierId,
      { opening_balance: opening_balance },
      { new: true } // This option returns the updated document
    );

    if (!updatedSupplier) {
      return res.status(404).json({ success: false, message: "Supplier not found" });
    }

    res.status(200).json({
      success: true,
      message: "Supplier opening balance updated successfully",
      updatedSupplier,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
