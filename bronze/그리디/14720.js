const { count } = require("console");
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcs = tcs.split(" ").map((e) => +e);

// 딸 초 바 순서
// 0  1  2
function solution() {
  let count = 0;
  let targetMilk = 0;

  for (let i = 0; i < tcs.length; i++) {
    if (tcs[i] === targetMilk) {
      count++;
      if (targetMilk === 2) {
        targetMilk = 0;
        continue;
      }
      targetMilk++;
    }
  }

  console.log(count);
}
solution();
