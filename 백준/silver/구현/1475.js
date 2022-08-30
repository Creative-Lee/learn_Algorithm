const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

function solution() {
  let arr = new Array(10).fill([]);
  arr = arr.map((e, idx) => (e = [idx, 0]));
  for (let i = 0; i < input.length; i++) {
    arr[input[i]][1]++;
  }
  let count = arr.map((e) => e[1]);
  let sixNine = Math.ceil((count[6] + count[9]) / 2);
  count.splice(9, 1);
  count.splice(6, 1);

  let max = Math.max(...count, sixNine);
  console.log(max === 0 ? 1 : max);
}
solution();
// 6, 9
// 0,1,2,3,4,5,6,7,8,9 2차원배열 만들고 횟수기록
//  6,9는 카운트 더해서 / 2 하고 ceil 해버리자
