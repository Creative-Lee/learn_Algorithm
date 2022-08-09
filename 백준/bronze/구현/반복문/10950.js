const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let tcc = +input[0];
let tc = input.slice(1).map((lineArr) => lineArr.split(" ").map((num) => +num));
let sum = tc.map((numArr) => numArr.reduce((p, c) => p + c), 0);

for (let i = 0; i < tcc; i++) {
  console.log(sum[i]);
}
