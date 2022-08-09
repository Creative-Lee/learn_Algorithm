const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, info] = fs.readFileSync(file).toString().trim().split("\n");

function solution() {
  if (info.includes("LL")) {
    while (info.includes("LL")) {
      info = info.replace("LL", "S");
    }
    console.log(info.length + 1);
    return;
  }
  console.log(info.length);
}
solution();
// 13분 30초
