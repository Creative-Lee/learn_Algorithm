const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();
input = +input;

function factorial(n) {
  if (n <= 1) return 1;

  return n * factorial(n - 1);
}
console.log(factorial(input));

// 1! = 1
// 2! = 이전 결과 *2
// 3! = 이전 결과 *3

// n! = n-1! * n
