const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map((e) => +e);

function solution() {
  let first = Math.max(...input);
  input.splice(input.indexOf(first), 1);

  let second = Math.max(...input);
  console.log(second);
}
solution();
// 6분
