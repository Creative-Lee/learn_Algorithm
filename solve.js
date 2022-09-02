const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = fs.readFileSync(file).toString().trim();
n = +n;

function solution() {
  let arr = new Array(n).fill(0);

  let num = n;
  arr = arr.map((v) => {
    return v + num--;
  });
  let arr2;
  for (let i = 0; i < n - 1; i++) {
    arr.pop();
    let poped = arr.pop();
    arr2 = [poped, ...arr];
  }

  console.log(arr[0]);
}
solution();

// queue로 구현
// shift 후 shift다시한번 한 값을 push
// arr.length !== 1 일때까지 while
// n은 500000까지 즉 O(n2)불가능
