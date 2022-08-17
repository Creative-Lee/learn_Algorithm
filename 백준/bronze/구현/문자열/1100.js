const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
input = input.map((e) => e.trim());
function solution() {
  let whiteCount = 0;
  let isStartWhite = true;

  for (let i = 0; i < input.length; i++) {
    let line = input[i];
    let split = line.split("");
    let white;
    if (isStartWhite) {
      white = split.filter((e, idx) => idx === 0 || idx === 2 || idx === 4 || idx === 6);
    } else {
      white = split.filter((e, idx) => idx === 1 || idx === 3 || idx === 5 || idx === 7);
    }
    let count = white.filter((e) => e === "F").length;

    whiteCount += count;
    isStartWhite = !isStartWhite;
  }
  console.log(whiteCount);
}

solution();
