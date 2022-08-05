const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;
tcs = tcs.map((e) =>
  e
    .trim()
    .split(" ")
    .map((e) => +e)
);

function solution() {
  for (let tc of tcs) {
    let H = tc[0];
    let W = tc[1];
    let N = tc[2];

    let h = N % H === 0 ? H : N % H;
    let w = Math.ceil(N / H);

    if (w.toString().length === 1) {
      w = "0" + w.toString();
    }

    console.log(`${h}` + `${w}`);
  }
}
solution();
//30분 over
