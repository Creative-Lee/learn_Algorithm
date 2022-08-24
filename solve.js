const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;
tcs = tcs
  .trim()
  .split(" ")
  .map((e) => +e);

function solution() {
  let stack = [];
  let result = new Array(tcc).fill(-1);
  for (let i = 0; i < tcc; i++) {
    while (stack.length && stack[stack.length - 1][0] < tcs[i]) {
      let idx = stack.pop()[1];
      result[idx] = tcs[i];
    }
    stack.push([tcs[i], i]);
  }
  console.log(result.join(" "));
}
solution();
