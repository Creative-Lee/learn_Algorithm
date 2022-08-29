const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b] = fs.readFileSync(file).toString().trim().split(" ");

function solution() {
  let front = 0;
  let back = 0;
  let aArr = a.split("");
  let bArr = b.split("");
  let gap = [];

  for (let i = 0; i <= b.length - a.length; i++) {
    gap.push(aArr.filter((e, idx) => e !== bArr[idx + i]).length);
  }
  console.log(Math.min(...gap));
}
solution();

//adaabc aababbc

//1시간
