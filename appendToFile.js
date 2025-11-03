const fs = require("fs");

try {
  fs.appendFileSync(
    "log.txt",
    `\n\n[TAG: INFO]New log entry: data appended at 2:00PM [PRIORITY: INFO]`
  );
  console.log("data appended successfully");
} catch (error) {
  console.error("Error: ", error);
}
