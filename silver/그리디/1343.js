const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

function solution() {
  while (input.includes("XX")) {
    input = input.replace("XX", "BB");
  }
  while (input.includes("BBBB")) {
    input = input.replace("BBBB", "AAAA");
  }
  if (input.includes("X")) {
    console.log(-1);
    return;
  }
  console.log(input);
}

solution();
//5분
