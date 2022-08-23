const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input, tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");
input = input.trim();
tcc = +tcc;
tcs = tcs.map((e) => e.trim());

function solution() {
  let left = input.split("");
  let right = [];

  for (let i = 0; i < tcc; i++) {
    let process = tcs[i][0];
    if (process === "L" && left.length) {
      right.push(left.pop());
    }
    if (process === "D" && right.length) {
      left.push(right.pop());
    }
    if (process === "B") {
      left.pop();
    }
    if (process === "P") {
      left.push(tcs[i][2]);
    }
  }
  console.log([...left, ...right.reverse()].join(""));
}

solution();
//30분 over

// 아래는 메모리 초과 났던 첫 풀이

// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let [input, tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");
// input = input.trim();
// tcc = +tcc;
// tcs = tcs.map((e) => e.trim());

// function solution() {
//   let stack = [];
//   let arr = input.split("");
//   let cursor = input.length;

//   for (let i = 0; i < tcc; i++) {
//     let process = tcs[i];
//     if (process[0] === "L") {
//       if (cursor > 0) {
//         cursor--;
//       }
//       continue;
//     }
//     if (process[0] === "D") {
//       if (cursor < input.length) {
//         cursor++;
//       }
//       continue;
//     }
//     if (process[0] === "B") {
//       if (cursor > 0) {
//         arr.splice(arr[cursor] - 1, 1);
//         cursor--;
//       }
//       continue;
//     }
//     if (process[0] === "P") {
//       let addStr = process[2];
//       stack.push(arr.slice(0, cursor).join(""));
//       stack.push(addStr);
//       stack.push(arr.slice(cursor).join(""));
//       arr = stack.join("").split("");
//       stack = [];
//       cursor++;
//     }
//   }
//   console.log(arr.join(""));
// }

// solution();
