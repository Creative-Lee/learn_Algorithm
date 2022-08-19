const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;
tcs = tcs.map((e) => e.trim());

function solution() {
  let answer = tcs[0];

  for (let i = 1; i < tcc; i++) {
    let str = "";
    for (let j = 0; j < tcs[i].length; j++) {
      if (answer[j] === tcs[i][j]) {
        str += tcs[i][j];
      } else {
        str += "?";
      }
    }
    answer = str;
  }
  console.log(answer);
}

solution();
//15분
