const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();
input = +input;

function solution() {
  let isEven = input % 2 === 0 ? true : false;
  let answer = [];
  let num = 1;

  if (isEven) {
    for (let i = 0; i < input; i++) {
      answer.push(num);
      if (num === 1) num = 2;
      else num = 1;
    }
  } else {
    for (let i = 0; i < input; i++) {
      if (i === input - 1) num = 3;
      answer.push(num);
      if (num === 1) num = 2;
      else num = 1;
    }
  }
  console.log(answer.join(" "));
}
solution();
//15분
