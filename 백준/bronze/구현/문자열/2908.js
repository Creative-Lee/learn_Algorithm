const fs = require("fs");
let [a, b] = fs.readFileSync("./input.txt").toString().trim().split(" ");

function solution(a, b) {
  let [a1, a2, a3] = [a[0], a[1], a[2]];
  let [b1, b2, b3] = [b[0], b[1], b[2]];

  let sangsuA = a3 + a2 + a1;
  let sangsuB = b3 + b2 + b1;

  if (sangsuA > sangsuB) {
    console.log(sangsuA);
    return;
  }
  console.log(sangsuB);
}

solution(a, b);
