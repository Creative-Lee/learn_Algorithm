const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [matrix, ...value] = fs.readFileSync(file).toString().trim().split("\n");
matrix = matrix.split(" ").map((e) => +e);
let [N, M] = matrix;

value = value.map(e=>e)

function solution() {
  let stack = [];
}

solution();
