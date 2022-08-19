const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

function solution() {
  let result = [];
  let process = [];
  let arr = input.split("");
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "<") {
      result.push(arr.slice(i, input.indexOf(">", i) + 1).join(""));
      i = input.indexOf(">", i);
      continue;
    }

    if (input[i] === " ") {
      result.push(process.reverse().join(""));
      result.push(" ");
      process = [];
      continue;
    }
    if (input[i + 1] === "<" || i + 1 === input.length) {
      process.push(input[i]);
      result.push(process.reverse().join(""));
      process = [];
      continue;
    }
    process.push(input[i]);
  }
  console.log(result.join(""));
}
solution();

//1시간
