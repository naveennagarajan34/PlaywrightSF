module.exports = {
  default: {
    timeout: 60000,
    require: ["features/step-definitions/*.js", "features/support/*.js"],
    format: ["html:reports/report.html"],
  },
};
