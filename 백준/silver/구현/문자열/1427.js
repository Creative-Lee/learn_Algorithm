const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();
input = input.split("").map((e) => +e);

function solution() {
  let result = input.sort((a, b) => b - a).join("");
  console.log(result);
}
solution();
//5분
