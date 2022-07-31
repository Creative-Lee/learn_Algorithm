const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [static, dinamic, price] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map((e) => +e);

// 고정 + 변동X 대수 === 가격X 대수

function solution() {
  let margin = price-dinamic
  let result = 
  margin > 0 ? Math.floor(static/margin)+ 1 : -1

  console.log(result)
}
solution();
