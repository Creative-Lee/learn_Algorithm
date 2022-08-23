const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

let [n, k] = input.split(" ");

n = +n;
k = +k;

function solution() {
  let q = [];
  let num = 0;
  let arr = new Array(n).fill(0).map((e) => {
    num++;
    return e + num;
  });

  while (arr.length !== 0) {
    for (let i = 0; i < k - 1; i++) {
      let shifted = arr.shift();
      arr.push(shifted);
    }
    q.push(arr.shift());
  }

  console.log(`<${q.join(", ")}>`);
}

solution();
