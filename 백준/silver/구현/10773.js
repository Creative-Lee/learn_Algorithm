const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;
tcs = tcs.map((e) => +e);

function solution() {
  for (let i = 0; i < tcc; i++) {
    if (tcs[i] === 0) {
      tcs.splice(i - 1, 2);
      i -= 2;
    }
  }

  if (tcs.length === 0) {
    console.log(0);
    return;
  }
  let result = tcs.reduce((p, c) => p + c);
  console.log(result);
}

solution();
// 11분
