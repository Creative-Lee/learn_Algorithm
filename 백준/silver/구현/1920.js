const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, nNum, m, mNum] = fs.readFileSync(file).toString().trim().split("\n");
n = +n;
nNum = nNum.split(" ").map((e) => +e);
m = +m;
mNum = mNum.split(" ").map((e) => +e);

function solution() {
  let nSet = new Set(nNum);

  let result = mNum.map((n) => (nSet.has(n) ? 1 : 0));

  console.log(result.join("\n"));
}
solution();
