const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;
tcs = tcs.map((e) => e.trim());

function solution() {
  for (let tc of tcs) {
    let str = tc;

    for (let i = 0; i < tc.length; i++) {
      str = str.split("()");
      str = str.join("");
    }

    if (str.length === 0) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}
solution();
// 18분
