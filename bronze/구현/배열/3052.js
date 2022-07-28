const fs = require("fs");
let I = fs.readFileSync("./input.txt").toString().trim().split("\n");

I = I.map((v) => Number(v.trim()));

let result = [];

I.forEach((num) => {
  const remainder = num % 42;

  if (!result.includes(remainder)) {
    result.push(remainder);
  }
});

console.log(result.length);
