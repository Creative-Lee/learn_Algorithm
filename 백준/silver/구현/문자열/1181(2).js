const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;
tcs = tcs.map((e) => e.trim());

function solution() {
  let stack = [];

  for (let tc of tcs) {
    if (!stack.includes(tc)) {
      stack.push(tc);
    }
  }
  stack.sort((a, b) => {
    if (a.length - b.length === 0) {
      return a.localeCompare(b);
    }
    return a.length - b.length;
  });

  console.log(stack.join("\n"));
}
solution();
