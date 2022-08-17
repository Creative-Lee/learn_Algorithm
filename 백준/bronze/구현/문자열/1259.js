const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input.pop();
input = input.map((e) => e.trim());

function solution() {
  let answer = [];
  for (let str of input) {
    let reverse = str.split("").reverse().join("");
    if (reverse === str) answer.push("yes");
    else answer.push("no");
  }

  console.log(answer.join("\n"));
}

solution();
