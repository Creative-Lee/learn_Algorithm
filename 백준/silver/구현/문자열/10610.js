const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = fs.readFileSync(file).toString().trim();

function solution() {
  if (!n.includes(0)) {
    console.log(-1);
    return;
  }
  let sum = n
    .split("")
    .map((e) => +e)
    .reduce((a, b) => a + b, 0);
  if (sum % 3 === 0) {
    let max = n
      .split("")
      .sort((a, b) => b - a)
      .join("");

    console.log(max);
  } else {
    console.log(-1);
  }
}

solution();
// 30분
// 패턴을 알아야함
