const Inventory = require("../models/Inventory");

const generateSerialNo = (labelSeries) => {
  if (!labelSeries) {
    throw new Error("Label series is required to generate a serial number");
  }

  // Generate a random 10-digit number
  const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);

  // Combine label series with the random number
  return `${labelSeries}-${randomNumber}`;
};

// Add Inventory Item
exports.addInventoryItem = async (req, res) => {
  try {
    const serial_no = generateSerialNo(req.body.label_series);
    const newItem = await Inventory.create({ ...req.body, serial_no });

    res.status(201).json({
      success: true,
      message: "Product added to inventory successfully",
      newItem,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get Unverified Inventory Items
exports.getUnverifiedInventory = async (req, res) => {
  try {
    const items = await Inventory.find().populate(
      "supplier_id product_id"
    );

    res.status(200).json({ success: true, items });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Verify Inventory Item
exports.verifyInventoryItem = async (req, res) => {
  try {
    const updatedItem = await Inventory.findOneAndUpdate(
      { serial_no: req.params.serialNumber },
      { status: true },
      { new: true } // This option returns the updated document
    );

    if (!updatedItem) {
      return res
        .status(404)
        .json({ success: false, message: "Inventory item not found" });
    }

    res.status(200).json({ success: true, message: "Inventory item verified", updatedItem });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
