const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const employeeRoutes = require("./routes/employeeRoutes");
const salaryRoutes = require("./routes/salaryRoutes");
const payslipRoutes = require("./routes/payslipRoutes");
const viewRoutes = require("./routes/viewRoutes");

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(`${process.env.MONGODB_URI}`)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/employees", employeeRoutes);
app.use("/api/salaries", salaryRoutes);
app.use("/api/payslips", payslipRoutes);
app.use("/", viewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
