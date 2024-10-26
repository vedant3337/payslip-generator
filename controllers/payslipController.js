const Payslip = require("../models/Payslip");

exports.savePayslip = async (req, res) => {
  try {
    const newPayslip = new Payslip(req.body);
    await newPayslip.save();
    res.json({ message: "Payslip saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllPayslips = async (req, res) => {
  try {
    const payslips = await Payslip.find({});
    res.json({ payslips });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
