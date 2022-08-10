const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString();

function solution() {
  console.log(input);
}
solution();
