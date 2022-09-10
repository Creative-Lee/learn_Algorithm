const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

function solution() {
  let result = [];
  let stack = new Array(+input).fill(+input);

  stack = stack.map((e, idx) => e - idx);

  for (let i = 0; i < input; i++) {
    result.push(stack.pop());
    stack.unshift(stack.pop());
  }
  console.log(result.join(" "));
}

solution();
