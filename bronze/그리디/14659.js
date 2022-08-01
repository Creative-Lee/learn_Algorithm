const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");
tcc = +tcc;
tcs = tcs[0].split(" ").map((e) => +e);

function solution() {
  let arr = [];
  for (let tc of tcs) {
    let count = 0;

    for (let i = tcs.findIndex((e) => e === tc) + 1; i < tcc; i++) {
      if (tc > tcs[i]) {
        count++;
      } else {
        break;
      }
    }
    arr.push(count);
  }

  console.log(Math.max(...arr));
}
solution();
//30분 over
