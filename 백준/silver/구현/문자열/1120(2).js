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
    let count = 0;
    aArr.forEach((e, idx) => {
      if (e !== bArr[idx + i]) {
        count++;
      }
    });
    gap.push(count);
  }
  console.log(Math.min(...gap));
}
solution();
