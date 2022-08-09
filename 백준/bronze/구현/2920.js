const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map((e) => +e);

function solution() {
  let ascending = [1, 2, 3, 4, 5, 6, 7, 8];
  let descending = [8, 7, 6, 5, 4, 3, 2, 1];

  if (JSON.stringify(ascending) === JSON.stringify(input)) {
    console.log("ascending");
    return;
  }
  descending;
  if (JSON.stringify(descending) === JSON.stringify(input)) {
    console.log("descending");
    return;
  }
  console.log("mixed");
}

solution();
//  17분
