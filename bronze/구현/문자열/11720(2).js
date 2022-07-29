const fs = require("fs");
let [c, num] = fs.readFileSync("./input.txt").toString().trim().split("\n");

num = num.split("").map((e) => +e);
function solution() {
  let sum = 0;

  for (let number of num) {
    sum += number;
  }

  console.log(sum);
}

solution();
