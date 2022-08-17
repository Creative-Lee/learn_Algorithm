const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();
input = +input;

function solution() {
  let star = "*";
  let empty = " ";
  let result = "";
  for (let i = 1; i < input * 2; i += 2) {
    result += empty.repeat((input * 2 - i) / 2);
    result += star.repeat(i);
    result += "\n";
  }
  console.log(result);
}
solution();
