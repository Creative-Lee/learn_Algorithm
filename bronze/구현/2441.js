const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();
input = +input;

function solution() {
  let arr = new Array(input).fill("*");

  for (let i = 0; i < input; i++) {
    console.log(arr.join(""));
    arr[i] = " ";
  }
}
solution();
//11분
