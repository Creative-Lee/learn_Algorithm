const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;
tcs = tcs.split(" ").map((e) => +e);

function solution() {
  let compare = tcs;
  let result = new Array(tcc).fill(-1);
  let stack = []; // 3

  for (let i = 0; i < tcc; i++) {
    while (stack.length && stack[stack.length - 1][0] < compare[i]) {
      let idx = stack.pop()[1];
      result[idx] = compare[i];
    }
    stack.push([compare[i], i]);
  }

  console.log(result.join(" "));
}
solution();

//3시간
