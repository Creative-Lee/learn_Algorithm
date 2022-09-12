const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let piece = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map((e) => +e);

function solution() {
  while (piece.join("") !== "12345") {
    for (let i = 0; i < 5; i++) {
      if (piece[i] > piece[i + 1]) {
        let prev = piece[i];
        piece[i] = piece[i + 1];
        piece[i + 1] = prev;
        console.log(piece.join(" "));
      }
    }
  }
}

solution();
