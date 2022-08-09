const fs = require("fs");
const { off } = require("process");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

let tcc = +input[0];
let tcs = input.slice(1).map((e) => e.trim());

let groupCount = tcc;

for (let i = 0; i < tcc; i++) {
  let newArr = [];

  for (let j = 0; j < tcs[i].length; j++) {
    if (newArr.includes(tcs[i][j]) === false) {
      newArr.push(tcs[i][j]);
    } else {
      if (newArr[newArr.length - 1] !== tcs[i][j]) {
        groupCount--;
        break;
      }
    }
  }
}
console.log(groupCount);
