const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

let length = input.length;
input = +input;

function solution() {
  let sum = 0;
  for (let i = 1; i <= input; i *= 10) {
    sum += input - i + 1;
  }
  console.log(sum);
}

solution();
