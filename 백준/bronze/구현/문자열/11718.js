const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let tcs = fs.readFileSync(file).toString().trim().split("\n");

tcs = tcs.map((word) => word.trim());
function solution() {
  for (let tc of tcs) {
    console.log(tc);
  }
}
solution();
