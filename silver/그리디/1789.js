const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

input = +input;

function solution() {
  let count = 0;
  let sum = 0;
  let i = 1;

  while (sum + i < input) {
    count++;
    sum += i;
    i++;
    if (sum + i === input) {
      count++;
    }
  }
  if (input === 1 || input === 2) {
    console.log(1);
    return;
  }
  console.log(count);
}
solution();
// 27분
