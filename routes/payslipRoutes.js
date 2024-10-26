const express = require("express");
const {
  savePayslip,
  getAllPayslips,
} = require("../controllers/payslipController");

const router = express.Router();

router.post("/save-payslip", savePayslip);
router.get("/payslips", getAllPayslips);

module.exports = router;
