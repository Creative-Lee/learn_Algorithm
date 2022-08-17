const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = fs.readFileSync(file).toString().trim();

function solution() {
  n = n.trim();
  console.log(
    n
      .split("-")
      .map((str) => str[0])
      .join("")
  );
}

solution();

// 5분
