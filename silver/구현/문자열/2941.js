const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

const arr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
const count = new Array(arr.length).fill(0);

function solution() {
  if (input === "") {
    console.log(0);
    return;
  }
  let countIndex = 0;

  for (let a of arr) {
    let index = 0;
    while (index !== input.length) {
      if (input.indexOf(a, index) >= 0) {
        index = input.indexOf(a, index);
        count[countIndex] += 1;
      }
      index++;
    }
    countIndex++;
  }

  console.log(input.length - count.reduce((p, c) => p + c));
}
solution();
