const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");
tcc = +tcc;
tcs = tcs.map((e) => e.trim());

function solution() {
  let [p1, p2] = [100, 100];

  for (let tc of tcs) {
    let [a, b] = tc.split(" ");
    if (a > b) {
      p2 -= a;
    } else if (a < b) {
      p1 -= b;
    } else {
      continue;
    }
  }
  console.log(p1);
  console.log(p2);
}

solution();
