const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

let a = input
  .map((arr) => arr.split(" "))
  .map((e) => e[0])
  .map((e) => +e);
let b = input
  .map((arr) => arr.split(" "))
  .map((e) => e[1])
  .map((e) => +e);

function solution() {
  let result1;
  let result2;

  if (a.includes(a[0], 1)) {
    if (a.indexOf(a[0], 1) === 1) {
      result1 = a[2];
    } else {
      result1 = a[1];
    }
  } else {
    result1 = a[0];
  }

  if (b.includes(b[0], 1)) {
    if (b.indexOf(b[0], 1) === 1) {
      result2 = b[2];
    } else {
      result2 = b[1];
    }
  } else {
    result2 = b[0];
  }

  console.log(`${result1} ${result2}`);
}
solution();
