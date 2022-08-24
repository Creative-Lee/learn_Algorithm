const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;
tcs = tcs.map((e) => e.trim());

function solution() {
  let cup = [1, 2, 3];
  for (let i = 0; i < tcc; i++) {
    let [x, y] = tcs
      .shift()
      .split(" ")
      .map((e) => +e);

    cup = cup.map((num) => {
      if (num === x) {
        return y;
      }
      if (num === y) {
        return x;
      }
      return num;
    });
  }
  console.log(cup[0]);
}
solution();
//15분
