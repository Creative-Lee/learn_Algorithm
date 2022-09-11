const { transcode } = require("buffer");
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;

function solution() {
  let str = "pPAp";

  let count = 0;
  while (true) {
    if (tcs.includes(str)) {
      count++;
      tcs = tcs.replace(str, "");
    } else {
      break;
    }
  }
  console.log(count);
}

solution();
