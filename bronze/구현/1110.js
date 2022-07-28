const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim();

function solution() {
  let num = +input;
  let iterCount = 0;

  while (true) {
    let ten = Math.floor(num / 10); //2
    let one = num % 10; // 6
    let sum = ten + one;
    let sumOne = sum % 10;

    num = +`${one}${sumOne}`;

    iterCount++;
    if (num === +input) break;
  }

  console.log(iterCount);
}

solution();
