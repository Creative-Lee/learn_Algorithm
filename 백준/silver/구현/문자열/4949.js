const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = input.map((e) => e.trim());
input.pop();

function solution() {
  let target = "()[]";
  let answer = input.map((s) => {
    let stack = [];
    for (let l of s) {
      if (!target.includes(l)) continue; // 알파벳 패스
      if (l === "(" || l === "[") stack.push(l);
      else if (l === ")") {
        if (stack.length === 0 || stack[stack.length - 1] !== "(") return "no";
        stack.pop(); // 맞는 쌍 제거
      } else if (l === "]") {
        if (stack.length === 0 || stack[stack.length - 1] !== "[") return "no";
        stack.pop(); // 맞는 쌍 제거
      }
    }
    if (stack.length !== 0) return "no";
    return "yes";
  });

  console.log(answer.join("\n"));
}
solution();
// 1시간 over
