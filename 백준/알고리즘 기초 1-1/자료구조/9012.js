const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;
tcs = tcs.map((e) => e.trim());

function solution() {
  let resultArr = tcs.map((tc) => {
    let stack = [];
    for (let i = 0; i < tc.length; i++) {
      if (tc[i] === "(") stack.push(tc[i]);
      if (tc[i] === ")") {
        if (stack[stack.length - 1] === "(") stack.pop();
        else return "NO";
      }
    }
    if (stack.length !== 0) return "NO";
    return "YES";
  });

  console.log(resultArr.join("\n"));
}

solution();
