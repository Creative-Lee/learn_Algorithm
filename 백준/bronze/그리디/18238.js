const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

function solution() {
  let count = 0;
  let tmp = 65;

  //65 - 90
  for (let l of input) {
    let left = l.charCodeAt() - tmp;
    let right = tmp - l.charCodeAt();
    tmp = l.charCodeAt();

    if (left < 0) left += 26;
    if (right < 0) right += 26;
    count += Math.min(left, right);
  }
  console.log(count);
}
solution();
// 30분 over

// 오른쪽으로 돌리는 건 65 - 66  + 26  =  25 === b
// 왼쪽으로 돌리는 건 66 - 65  1 === b
