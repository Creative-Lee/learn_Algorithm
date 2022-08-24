const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;
tcs = tcs.map((e) => e.trim());

function solution() {
  let result = [];
  for (let i = 0; i < tcc; i++) {
    let [n, qIdx] = tcs.shift().split(" ");
    let important = tcs.shift().split(" ");
    n = +n;
    qIdx = +qIdx;
    important = important.map((e, idx) => [+e, idx]);

    let q = [];

    while (important.length !== 0) {
      let isBig = !important.find((arr) => important[0][0] < arr[0]) ? true : false;
      if (isBig) {
        q.push(important.shift());
        continue;
      }
      important.push(important.shift()); // 중요도 낮으면 잘라서 뒤로
    }
    q.forEach((arr, idx) => {
      if (arr[1] === qIdx) {
        result.push(idx + 1);
      }
    });
  }
  console.log(result.join("\n"));
}
solution();
//25분
