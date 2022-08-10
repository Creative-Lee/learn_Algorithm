const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("-");
input = input
  .map((e) => e.split("+"))
  .map((arr) => arr.map((e) => +e))
  .map((arr) => arr.reduce((p, c) => p + c, 0))
  .reduce((p, c) => p - c);
console.log(input);

function solution() {}
solution();

// 19분

// -뒤에있는 +는 무조건 괄호 나머지는 그냥 연산
