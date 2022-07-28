const fs = require("fs");
let input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((n) => +n)
  .sort((a, b) => a - b);

function solution() {
  let [one, two, three] = input;
  let result = 0;

  if (one === two && one === three) {
    result = 10000 + one * 1000;
    console.log(result);
    return;
  }

  if (one === two && one !== three) {
    result = 1000 + one * 100;
    console.log(result);
    return;
  }

  if (one !== two && two === three) {
    result = 1000 + two * 100;
    console.log(result);
    return;
  }

  if (one === three && one !== two) {
    result = 1000 + one * 100;
    console.log(result);
    return;
  }

  if (one !== two && one !== three && two !== three) {
    result = 100 * three;
    console.log(result);
    return;
  }
}

solution();
