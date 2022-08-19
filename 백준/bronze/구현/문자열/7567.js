const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

function solution() {
  let stack = [input[0]];
  let count = 0;

  for (let i = 1; i < input.length; i++) {
    if (input[i] === stack[stack.length - 1]) {
      count++;
    }
    stack.push(input[i]);
  }
  let max = input.length * 10;

  console.log(max - 5 * count);
}
solution();
// 8분
