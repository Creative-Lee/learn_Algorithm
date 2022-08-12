const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b] = fs.readFileSync(file).toString().trim().split(" ");

function solution() {
  let minA = a;
  let minB = b;
  let maxA = a;
  let maxB = b;
  let maxLength = a.length - b.length > 0 ? a.length : b.length;

  for (let i = 0; i < maxLength; i++) {
    minA = minA.replace("6", "5");
    minB = minB.replace("6", "5");
  }
  for (let i = 0; i < maxLength; i++) {
    maxA = maxA.replace("5", "6");
    maxB = maxB.replace("5", "6");
  }

  console.log(`${+minA + +minB} ${+maxA + +maxB}`);
}
solution();
// 20분
