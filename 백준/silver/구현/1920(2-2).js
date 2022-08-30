const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, N, m, M] = fs.readFileSync(file).toString().trim().split("\n");
n = +n;
N = N.split(" ").map((e) => +e);
m = +m;
M = M.split(" ").map((e) => +e);

function solution() {
  N = N.sort((a, b) => a - b);

  const binary = (list, target, startIdx, endIdx, mid) => {
    mid = Math.floor((startIdx + endIdx) / 2);

    if (endIdx < startIdx) {
      return list[mid] === target ? 1 : 0;
    }
    if (list[mid] > target) {
      endIdx = mid - 1;
    } else {
      startIdx = mid + 1;
    }

    return binary(list, target, startIdx, endIdx, mid);
  };

  let result = M.map((e) => binary(N, e, 0, N.length - 1, 0));
  console.log(result.join("\n"));
}
solution();
