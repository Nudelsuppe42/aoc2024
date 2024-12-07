import fs from "fs";
import path from "path";
import day1 from "./days/day1";
import day2 from "./days/day2";

const args = process.argv.slice(2);
const file = args[0];
const filePath = path.join(__dirname, "inputs", file + ".txt");
const fileContent = fs.readFileSync(filePath, "utf-8");

let result;
switch (file) {
  // Add your cases here
  case "day1":
    result = day1(fileContent);
    break;
  case "day2":
    result = day2(fileContent);
    break;
  default:
    console.log(`No file found for day: ${file}`);
    result = "";
    break;
}

console.log("The result calculated is:")
console.log(result);

const resultFilePath = path.join(__dirname, "outputs", file+".txt")
fs.writeFileSync(resultFilePath,result)
