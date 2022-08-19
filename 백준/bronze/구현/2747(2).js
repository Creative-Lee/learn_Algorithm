const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();
input = +input;

function solution(n1, n2, count, targetCount) {
  if (targetCount === 0) {
    console.log(0);
    return;
  }
  if (targetCount === 1) {
    console.log(1);
    return;
  }
  if (count === targetCount - 2) {
    console.log(n1 + n2);
    return;
  }

  return solution(n2, n1 + n2, ++count, targetCount);
  // n1 + n2 = n3
  // n2 + n3 = n4
}

solution(0, 1, 0, input);
