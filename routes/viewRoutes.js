const express = require("express");
const {
  serveLandingPage,
  serveIndexPage,
  serveAdminPage,
  servePayslipDownloadPage,
} = require("../controllers/viewController");

const router = express.Router();

router.get("/", serveLandingPage);
router.get("/index", serveIndexPage);
router.get("/admin", serveAdminPage);
router.get("/download-payslip", servePayslipDownloadPage);

module.exports = router;
