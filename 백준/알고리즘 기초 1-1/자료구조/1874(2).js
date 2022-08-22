const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;
tcs = tcs.map((e) => e.trim()).map((e) => +e);

function solution() {
  let num = 1;
  let stack = [];
  let result = [];

  for (let tc of tcs) {
    while (true) {
      if (tc < num) break;
      if (tc >= num) {
        stack.push(num);
        result.push("+");
        num++;
      }
    }

    if (stack[stack.length - 1] === tc) {
      stack.pop();
      result.push("-");
    } else {
      console.log("NO");
      return;
    }
  }

  console.log(result.join("\n"));
}

solution();
