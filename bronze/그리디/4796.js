const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [...tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcs = tcs.map((e) =>
  e
    .trim()
    .split(" ")
    .map((e) => +e)
);
tcs.pop();
let tcc = tcs.length;

function solution() {
  let caseNum = 1;

  for (let tc of tcs) {
    let L = tc[0];
    let P = tc[1];
    let V = tc[2];

    let dayCount = Math.floor(V / P) * L;
    let restDay = V % P;
    if (restDay > L) {
      restDay = L;
    }
    let total = dayCount + restDay;

    console.log(`Case ${caseNum}: ${total}`);
    caseNum++;
  }
}
solution();
//23분 40초
