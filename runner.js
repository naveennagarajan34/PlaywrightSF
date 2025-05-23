// runner.js
const { exec } = require("child_process");

const featurePath = "features/";
const tags = "@test";
const format = "json:reports/report.json";

const command = `npx cucumber-js ${featurePath} --tags "${tags}" --format ${format}`;

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error("❌ Test execution failed:");
    console.error(stderr);
    console.log(err);
    return;
  }
  console.log("✅ Test output:");
  console.log(stdout);
});
