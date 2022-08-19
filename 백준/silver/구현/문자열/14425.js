const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

let [n, m] = tcc.split(" ").map((e) => +e);
tcs = tcs.map((e) => e.trim());
let nArr = tcs.splice(0, n);
let mArr = [...tcs];
function solution() {
  let nSet = new Set(nArr);

  let count = 0;
  mArr.forEach((e) => {
    if (nSet.has(e)) {
      count++;
    }
  });
  console.log(count);
}
solution();
//15분
