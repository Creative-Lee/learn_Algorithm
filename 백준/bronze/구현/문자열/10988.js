const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = fs.readFileSync(file).toString().trim();

function solution() {
  let arr = n.split("");
  if (arr.length === 1) {
    console.log(1);
    return;
  }

  if (arr.join("") === arr.reverse().join("")) {
    console.log(1);
  } else {
    console.log(0);
  }
}

solution();
// 3분
