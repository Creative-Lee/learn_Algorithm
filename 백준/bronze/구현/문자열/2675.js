const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let tcc = +input[0];
let tcs = input.slice(1).map((arr) => arr.split(" ").map((e) => e.trim()));

for (let tc of tcs) {
  let iter = "";
  let iterCount = +tc[0];
  let str = tc[1];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < iterCount; j++) {
      iter += str[i];
    }
  }

  console.log(iter);
}
