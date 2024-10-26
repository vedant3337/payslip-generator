const path = require("path");

exports.serveLandingPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "landing.html"));
};

exports.serveIndexPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
};

exports.serveAdminPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "admin.html"));
};

exports.servePayslipDownloadPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "payslip.html"));
};
