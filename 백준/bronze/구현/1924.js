const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split(" ");

function solution() {
  let m = +input[0];
  let d = +input[1];
  let arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let day = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  let sum = 0;

  for (let i = 1; i < m; i++) {
    sum += day[`${i}`];
  }
  sum += d;

  let result = sum % 7;

  console.log(arr[result]);
}

solution();
//15분
// 1 3 6 10 15
// 1 2 3 4 5
