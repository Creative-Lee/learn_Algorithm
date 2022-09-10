const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;
tcs = tcs.map((e) => e.trim());

function solution() {
  let arr = new Array(tcc);
  tcs.forEach((e, idx) => (arr[idx] = e.split("")));

  const candyCount = () => {
    let result = 1;
    for (let i = 0; i < tcc; i++) {
      let count = 1;
      for (let j = 1; j < tcc; j++) {
        if (arr[i][j - 1] === arr[i][j]) {
          count++;
        } else {
          result = Math.max(result, count);
          count = 1;
        }

        result = Math.max(result, count);
      }
    }

    for (let i = 0; i < tcc; i++) {
      let count = 1;
      for (let j = 0; j < tcc - 1; j++) {
        if (arr[j + 1][i] === arr[j][i]) {
          count++;
        } else {
          result = Math.max(result, count);
          count = 1;
        }

        result = Math.max(result, count);
      }
    }
    return result;
  };
}

solution();
