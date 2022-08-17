const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = fs.readFileSync(file).toString().trim();

function solution() {
  let arr = n.split("");
  let result = [];
  for (let i = 0; i < n.length; i++) {
    result.push(arr.join(""));
    arr.shift();
  }
  result.sort((a, b) => a.localeCompare(b));
  console.log(result.join("\n"));
}

solution();
// 11분
