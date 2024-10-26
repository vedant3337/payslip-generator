const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

router.post("/register-employee", employeeController.registerEmployee);
router.get(
  "/getPayslip/:employeeId",
  employeeController.getPayslipByEmployeeId
);

module.exports = router;
