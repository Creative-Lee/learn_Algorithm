const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

function solution() {
  let count = 0;
  let rest = 1000 - +input;

  let coins = [500, 100, 50, 10, 5, 1];

  for (let coin of coins) {
    count += Math.floor(rest / coin);
    rest %= coin;
    if (rest === 0) {
      break;
    }
  }
  console.log(count);
}
solution();
