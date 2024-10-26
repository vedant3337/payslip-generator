const express = require("express");
const router = express.Router();
const salaryController = require("../controllers/salaryController");

router.put("/saveSalaryDetails", salaryController.updateSalaryDetails);
router.get("/getSalaryDetails/:post", salaryController.getSalaryDetailsByPost);
router.get("/getAllSalaries", salaryController.getAllSalaries);

module.exports = router;
