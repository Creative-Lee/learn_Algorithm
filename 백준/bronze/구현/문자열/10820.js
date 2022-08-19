const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let tcs = fs.readFileSync(file).toString().split("\n");

function solution() {
  let result = [];

  for (let tc of tcs) {
    let small = 0;
    let big = 0;
    let num = 0;
    let space = 0;

    for (let i = 0; i < tc.length; i++) {
      let char = tc[i].charCodeAt();
      if (97 <= char && char <= 122) {
        small++;
        continue;
      }
      if (65 <= char && char <= 90) {
        big++;
        continue;
      }
      if (48 <= char && char <= 57) {
        num++;
        continue;
      }
      if (32 === char) {
        space++;
        continue;
      }
    }
    if (small + big + num + space === 0) continue;
    result.push(`${small} ${big} ${num} ${space}`);
  }
  console.log(result.join("\n"));
}
solution();
// 30분 over
// 예외처리 ㅡㅡ
// 개행만 남음 === 모두 카운트 0 이면 제거 작업 해야함

//97 122    65 90    48 57    32
