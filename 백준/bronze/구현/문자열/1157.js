const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim();

let capital = input.toUpperCase();

let arr = new Array(26).fill(0);

for (let i = 0; i < capital.length; i++) {
  arr[capital[i].charCodeAt() - 65] += 1;
}

const m = Math.max(...arr);

if (arr.filter((count) => count === m).length === 1) {
  console.log(String.fromCharCode(arr.findIndex((v) => v === m) + 65));
} else {
  console.log("?");
}
