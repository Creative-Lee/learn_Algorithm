const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;
tcs = tcs.map((e) => +e);

function solution() {
  let stack = [];
  let answer = "";
  let n = 1;

  for (let i = 0; i < tcc; i++) {
    let targetNum = tcs.shift(); //1  2 5

    while (n <= targetNum) {
      stack.push(n);
      n++;
      answer += "+";
    } // 1  2   2  3   3,4,5  6
    console.log(answer);
    if (stack.pop() === targetNum) {
      // stack = []
      answer += "-";
    } else {
      console.log("NO");
      return;
    }
  }

  console.log(answer.split("").join("\n"));
}
solution();
//1시간 over
