const fs = require("fs");
let I = fs.readFileSync("./input.txt").toString().trim().split("\n");

I = I.map((v) => Number(v.trim()));

const strMul = `${I[0] * I[1] * I[2]}`;

let splitMul = strMul.split("").map((num) => Number(num));

for (let i = 0; i < 10; i++) {
  console.log(splitMul.filter((num) => num === i).length);
}
