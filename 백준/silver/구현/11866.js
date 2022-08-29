const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, k] = fs.readFileSync(file).toString().trim().split(" ");

n = +n;
k = +k;

function solution() {
  let num = 0;
  let result = [];
  let arr = new Array(n).fill(0);
  arr = arr.map((e) => e + ++num);

  while (arr.length !== 0) {
    for (let i = 0; i < k - 1; i++) {
      let shifted = arr.shift();
      arr.push(shifted);
    }
    result.push(arr.shift());
  }

  console.log(`<${result.join(", ")}>`);
}
solution();
