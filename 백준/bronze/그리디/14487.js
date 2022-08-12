const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;
tcs = tcs.split(" ").map((e) => +e);
function solution() {
  let max = Math.max(...tcs);
  console.log(tcs.reduce((p, c) => p + c, 0) - max);
}
solution();
// 15분
