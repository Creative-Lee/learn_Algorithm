const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

input = input.map((e) => e.trim());

function solution() {
  let result = "";
  let lengthArr = input.map((str) => str.length);
  let maxLength = Math.max(...lengthArr);
  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < 5; j++) {
      if (input[j][i] === undefined) {
        result += "";
        continue;
      }
      result += input[j][i];
    }
  }

  console.log(result);
}

solution();
//15분
