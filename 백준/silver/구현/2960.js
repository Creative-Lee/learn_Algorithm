const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, k] = fs.readFileSync(file).toString().trim().split(" ");

function solution() {
  let arr = new Array(n - 1).fill(2);
  let result = [];
  arr = arr.map((e, idx) => e + idx);

  while (arr.length !== 0) {
    let shifted = arr.shift();
    result.push(shifted);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % shifted === 0) {
        result.push(arr.splice(i, 1)[0]);
      }
    }
  }

  console.log(result[k - 1]);
}
solution();
