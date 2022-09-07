const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();
function solution() {
  let length = input.length;
  let arr = input.split("");
  for (let i = 0; i < length / 2; i++) {
    input = input.replace("()", "");
    input = input.replace("[]", "");
  }

  if (!input) {
    // 모두 지워지면 올바른 괄호열
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "(" || arr[i] === "[") {
        stack.push(arr[i]);
      }

      if (arr[i] === ")") {
        let num = 0;
        while (true) {
          let poped = stack.pop();
          if (poped === "(") {
            if (!num) {
              stack.push(2);
            } else {
              stack.push(num * 2);
            }
            break;
          } else {
            num += poped;
          }
        }
      }
      if (arr[i] === "]") {
        let num = 0;

        while (true) {
          let poped = stack.pop();
          if (poped === "[") {
            if (!num) {
              stack.push(3);
            } else {
              stack.push(num * 3);
            }
            break;
          } else {
            num += poped;
          }
        }
      }
    }

    console.log(stack.reduce((p, c) => p + c, 0));
  } else {
    console.log(0);
    return;
  }
}

solution();
// 20분
