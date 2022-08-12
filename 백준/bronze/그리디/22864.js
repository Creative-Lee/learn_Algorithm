const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b, c, d] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map((e) => +e);

function solution() {
  if (a > d) {
    console.log(0);
    return;
  }

  let h = 24;
  let tired = 0;
  let work = 0;

  for (let i = 0; i < h; i++) {
    if (tired + a > d) {
      tired -= c;
      if (tired < 0) {
        tired = 0;
      }
      continue;
    }
    tired += a;
    work += b;
  }
  console.log(work);
}
solution();
//20분

// a - 시간당 피로도 증가
// b - 시간당 일처리량
// c - 쉬는시간당 피로도 감소
// d - 최대 피로도 양
