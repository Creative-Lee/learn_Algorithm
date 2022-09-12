const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input, str] = fs.readFileSync(file).toString().trim().split("\n");
input = input.trim();

function solution() {
  let count = 0;
  while (input.includes(str)) {
    input = input.substring(input.indexOf(str) + str.length);
    count++;
  }
  console.log(count);
}

solution();
