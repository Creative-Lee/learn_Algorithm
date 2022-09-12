const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");
tcc = +tcc;
tcs = tcs.map((e) => +e.trim());

function solution() {
  let result = [];
  for (let tc of tcs) {
    let arr = new Array(tc).fill(false);

    for (let i = 1; i <= tc; i++) {
      arr = arr.map((e, idx) => {
        if ((idx + 1) % i === 0) {
          return !e;
        } else {
          return e;
        }
      });
    }
    result.push(arr.filter((e) => e === true).length);
  }
  console.log(result.join("\n"));
}

solution();
