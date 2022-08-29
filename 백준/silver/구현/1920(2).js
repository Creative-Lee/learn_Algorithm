const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, nNum, m, mNum] = fs.readFileSync(file).toString().trim().split("\n");
n = +n;
nNum = nNum.split(" ").map((e) => +e);
m = +m;
mNum = mNum.split(" ").map((e) => +e);

function solution() {
  nNun = nNum.sort((a, b) => a - b); //

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

  const result = mNum.map((num) => binary(nNum, num, 0, nNum.length - 1, 0));

  console.log(result.join("\n"));
}
solution();
