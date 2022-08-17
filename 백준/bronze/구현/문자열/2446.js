const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();
input = +input;

function solution() {
  let star = "*";
  let empty = " ";
  let result = "";
  for (let i = input * 2 - 1; i > 0; i -= 2) {
    result += empty.repeat((input * 2 - i) / 2);
    result += star.repeat(i);
    result += "\n";
  }
  result = result.trim();
  console.log(result);
  let result2 = result.split("\n").slice(0, -1).reverse().join("\n");
  console.log(result2);
}
solution();
