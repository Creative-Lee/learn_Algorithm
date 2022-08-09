const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
let tcc = +input.shift();

function solution() {
  for (let i = 0; i < tcc; i++) {
    let k = +input.shift();
    let n = +input.shift();

    const house = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

    for (let i = 0; i <= n; i++) {
      house[0][i] = i;
    }

    for (let i = 1; i <= k; i++) {
      for (let j = 1; j <= n; j++) {
        house[i][j] = house[i - 1][j] + house[i][j - 1];
      }
    }

    console.log(house[k][n]);
  }
}

solution();
// 30분 over

// 1 3 6 10 15
// 1 2 3 4 5
