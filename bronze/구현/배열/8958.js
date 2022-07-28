const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

input = input.map((e) => e.trim());

function factorial(n) {
  let sum = 0;

  for (let i = 1; i < n + 1; i++) {
    sum += i;
  }
  return sum;
}

for (let i = 1; i < input.length; i++) {
  let scores = input[i]
    .split("X")
    .filter((score) => !(score === ""))
    .map((score) => factorial(score.length))
    .reduce((p, c) => p + c, 0);

  console.log(scores);
}
