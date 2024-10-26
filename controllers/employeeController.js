const Payslip = require("../models/Payslip");
const Salary = require("../models/Salary");

exports.registerEmployee = async (req, res) => {
  const { employeeName, employeeId, post } = req.body;

  try {
    const existingEmployee = await Payslip.findOne({ employeeId });
    if (existingEmployee) {
      return res.status(400).json({ error: "Employee already registered" });
    }

    const salaryDetails = await Salary.findOne({ post });
    if (!salaryDetails) {
      return res
        .status(404)
        .json({ error: `Salary details not found for the post: ${post}` });
    }

    const {
      salary: basicSalary,
      allowance: allowancePercent,
      bonus: bonusPercent,
    } = salaryDetails;
    const allowances = basicSalary * (allowancePercent / 100);
    const bonuses = basicSalary * (bonusPercent / 100);
    const pfDeduction = basicSalary * 0.12;
    const taxDeduction = basicSalary * 0.1;

    const grossSalary = basicSalary + allowances + bonuses;
    const totalDeductions = pfDeduction + taxDeduction;
    const netSalary = grossSalary - totalDeductions;

    const newEmployee = new Payslip({
      employeeName,
      employeeId,
      post,
      basicSalary,
      allowances,
      bonuses,
      pf: pfDeduction,
      tax: taxDeduction,
      deductions: totalDeductions,
      netSalary,
    });

    await newEmployee.save();
    res.status(201).json({
      message: "Employee registered and salary details saved successfully!",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPayslipByEmployeeId = async (req, res) => {
  const { employeeId } = req.params;

  try {
    const payslip = await Payslip.findOne({ employeeId });
    if (payslip) {
      res.status(200).json(payslip);
    } else {
      res
        .status(404)
        .json({ message: "Payslip not found for the provided Employee ID." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch payslip." });
  }
};
