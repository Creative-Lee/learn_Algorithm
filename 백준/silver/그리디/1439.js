const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

function solution() {
  let count = 0;
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] !== input[i + 1]) {
      count++;
    }
  }
  console.log(Math.floor((count + 1) / 2));
}
solution();
// 3시간 over
