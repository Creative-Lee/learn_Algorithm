const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

let [N, M] = tcc.split(" ").map((e) => e.trim());
N = +N;
M = +M;
tcs = tcs.map((e) => e.trim());
let n = tcs.slice(0, N);
let m = tcs.slice(N);

function solution() {
  let nSet = new Set(n);
  let mSet = new Set(m);
  let stack = [];

  mSet.forEach((n) => {
    if (nSet.has(n)) stack.push(n);
  });

  stack.sort((a, b) => a.localeCompare(b));
  stack.unshift(stack.length);
  console.log(stack.join("\n"));
}
solution();
