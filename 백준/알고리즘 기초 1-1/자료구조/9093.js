const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;
tcs = tcs.map((e) => e.trim());

function solution() {
  for (let tc of tcs) {
    let split = tc.split(" ");
    let reverse = split.map((l) => {
      let newL = "";
      for (let i = l.length - 1; i >= 0; i--) {
        newL += l[i];
      }
      return newL;
    });
    let result = reverse.join(" ");
    console.log(result);
  }
}

solution();
