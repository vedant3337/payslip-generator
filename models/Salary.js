const mongoose = require("mongoose");

const salarySchema = new mongoose.Schema({
  post: { type: String, required: true, unique: true },
  salary: { type: Number, required: true },
  allowance: { type: Number, required: true },
  bonus: { type: Number, required: true },
});

module.exports = mongoose.model("Salary", salarySchema);
