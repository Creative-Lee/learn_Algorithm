const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();
input = +input;

function solution() {
  if (input === 1) {
    console.log("1/1");
    return;
  }
  let readLeft = false;
  let targetLine = 0;
  let sum = 0;
  let num = 0;

  while (!(sum >= input)) {
    num++;
    sum += num;
    targetLine++;
    readLeft = !readLeft;
  }
  console.log(num);

  let n1 = targetLine;
  let n2 = 1;
  let arr = [];
  let count = num - input;
  for (let i = 0; i < targetLine; i++) {
    let str = `${n1}/${n2}`;
    arr.push(str);
    n1--;
    n2++;
  }

  if (readLeft) {
    console.log(arr[count]);
  } else {
    console.log(arr.reverse()[count]);
  }
}
solution();
// 타겟라인이 4면 4/1 3/2 2/3 1/4 4개있음
