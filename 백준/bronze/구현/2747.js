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
  if (targetCount - 2 === count) {
    console.log(n1 + n2);
    return;
  }

  return solution(n2, n1 + n2, count + 1, targetCount);
}

//n0 + n1 = n2
//n1 + n2 = n3
solution(0, 1, 0, input);
