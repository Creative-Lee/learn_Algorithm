const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

let [h, w] = tcc.split(" ").map((e) => +e);

tcs = tcs.map((e) => e.trim().split(""));

function solution() {
  let result = [];
  for (let i = 0; i < h; i++) {
    let stack = [];
    let line = tcs[i];

    for (let j = 0; j < w; j++) {
      if (line[j] === "c") {
        stack.push(0);
      } else if (line[j] === ".") {
        if (stack[stack.length - 1] >= 0) {
          stack.push(stack[stack.length - 1] + 1);
        } else {
          stack.push(-1);
        }
      }
    }

    result.push(stack.join(" "));
  }
  console.log(result.join("\n"));
}

solution();
