const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((e) => +e);

const testcaseArr = input.slice(1);

const Q = 25;
const D = 10;
const N = 5;
const P = 1;

let answer = "";

for (let i = 0; i < testcaseArr.length; i++) {
  let change = testcaseArr[i];

  let Qn = Math.floor(change / Q);
  let Dn = Math.floor((change % Q) / D);
  let Nn = Math.floor(((change % Q) % D) / N);
  let Pn = Math.floor((((change % Q) % D) % N) / P);

  answer += `${Qn} ${Dn} ${Nn} ${Pn}\n`;
}

console.log(answer);
