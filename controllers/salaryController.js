const Salary = require("../models/Salary");

exports.updateSalaryDetails = async (req, res) => {
  const salaryDetails = req.body;

  try {
    for (const detail of salaryDetails) {
      const { post, salary, allowance, bonus } = detail;
      await Salary.findOneAndUpdate(
        { post },
        { salary, allowance, bonus },
        { upsert: true, new: true }
      );
    }
    res.status(200).json({ message: "Salary details updated successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update salary details" });
  }
};

exports.getSalaryDetailsByPost = async (req, res) => {
  const { post } = req.params;

  try {
    const salaryDetail = await Salary.findOne({ post });
    if (salaryDetail) {
      res.status(200).json(salaryDetail);
    } else {
      res
        .status(404)
        .json({ message: "Salary details not found for this post." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch salary details" });
  }
};

exports.getAllSalaries = async (req, res) => {
  try {
    const salaryDocuments = await Salary.find({});
    res.status(200).json(salaryDocuments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
