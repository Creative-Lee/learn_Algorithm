// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

function solution() {
  let arr = new Array(10001).fill(false);
  let n = 1;

  while (n < 10000) {
    let dn = n + (n + "").split("").reduce((p, c) => +p + +c, 0);
    if (arr[dn] === false) arr[dn] = !arr[dn];
    n++;
  }

  let result = [];
  arr.forEach((e, idx) => {
    if (e === false) result.push(idx);
  });
  console.log(result.slice(1).join("\n"));
}
solution();
