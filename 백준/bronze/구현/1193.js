const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();
input = +input;

function solution() {
  if (input === 1) {
    console.log("1/1");
    return;
  }

  let targetLine = 0;
  let arr = [];
  let sum = 0;
  let num = 1;
  let count = 0;
  while (!(sum >= input)) {
    count = input - sum - 1;
    sum += num;
    targetLine++;
    num++;
  }

  let ja = targetLine;
  let mo = 1;

  for (let i = 0; i < targetLine; i++) {
    let jamo = `${ja}/${mo}`;
    arr.push(jamo);

    ja--;
    mo++;
  }
  let isEven = targetLine % 2 === 0 ? true : false;

  if (isEven) {
    console.log(arr.reverse()[count]);
  } else {
    console.log(arr[count]);
  }
}
solution();
//30분 over
