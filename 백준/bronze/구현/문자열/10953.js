const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;
tcs = tcs.map((e) => e.trim());

function solution() {
  for (let tc of tcs) {
    let [a, b] = tc.split(",").map((e) => +e);

    console.log(a + b);
  }
}
solution();
//5분
