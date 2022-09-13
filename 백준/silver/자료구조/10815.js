const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, nc, m, mc] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

n = +n;
nc = nc.split(" ").map((e) => +e);
m = +m;
mc = mc.split(" ").map((e) => +e);

function solution() {
  let set = new Set();
  for (let ele of nc) {
    set.add(ele);
  }
  let result = [];
  for (let ele of mc) {
    if (set.has(ele)) {
      result.push(1);
    } else {
      result.push(0);
    }
  }
  console.log(result.join(" "));
}

solution();
