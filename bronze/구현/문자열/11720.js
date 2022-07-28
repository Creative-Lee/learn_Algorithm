const fs = require("fs");
let [c, num] = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution() {
  let result = 0;

  for (let i = 0; i < c; i++) {
    result += +num[i];
  }

  console.log(result);
}

solution();
