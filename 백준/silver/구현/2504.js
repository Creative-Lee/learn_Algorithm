const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();
function solution() {
  let stack = [];
  let bracket = input;
  let length = input.length;

  for (let i = 0; i < length / 2; i++) {
    input = input.replace("()", "");
    input = input.replace("[]", "");
  }
  if (input) {
    console.log(0);
    return;
  }

  for (let i = 0; i < bracket.length; i++) {
    if (bracket[i] === "(" || bracket[i] === "[") {
      stack.push(bracket[i]);
      continue;
    }

    if (bracket[i] === ")") {
      let num = 0;
      while (true) {
        let poped = stack.pop();
        if (poped === "(") {
          if (num === 0) {
            stack.push(2);
          } else {
            stack.push(2 * num);
          }
          break;
        }
        if (typeof poped === "number") {
          num += poped;
          continue;
        }

        console.log(0);
        return;
      }
    }

    if (bracket[i] === "]") {
      let num = 0;
      while (true) {
        let poped = stack.pop();
        if (poped === "[") {
          if (num === 0) {
            stack.push(3);
          } else {
            stack.push(3 * num);
          }
          break;
        }
        if (typeof poped === "number") {
          num += poped;
          continue;
        }

        console.log(0);
        return;
      }
    }
  }
  console.log(stack.reduce((p, c) => p + c, 0));
}

solution();
// 4시간
