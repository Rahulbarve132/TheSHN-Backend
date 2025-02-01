const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

app.use("/api/supplier", require("./routes/supplierRoutes"));
app.use("/api/product", require("./routes/productRoutes"));
app.use("/api/inventory", require("./routes/inventoryRoutes"));

app.get("/", (req, res) => {
  return res.send(`<p>Server running successfully</p>`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
