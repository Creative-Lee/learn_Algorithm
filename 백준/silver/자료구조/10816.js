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
  let map = new Map();

  for (let ele of nc) {
    if (map.has(ele)) {
      map.set(ele, map.get(ele) + 1);
    } else {
      map.set(ele, 1);
    }
  }

  let result = [];
  for (let ele of mc) {
    if (map.has(ele)) {
      result.push(map.get(ele));
    } else {
      result.push(0);
    }
  }

  console.log(result.join(" "));
}

solution();
