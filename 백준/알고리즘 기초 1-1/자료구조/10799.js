const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

function solution() {
  let count = [];
  let piece = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(" && input[i + 1] === "(") {
      count.push(input[i]);
      piece++;
    }
    if (input[i] === "(" && input[i + 1] === ")") {
      piece += count.length;
      i++;
    }
    if (input[i] === ")" && input[i - 1] !== "(") {
      count.pop();
    }
  }
  console.log(piece);
}

solution();
