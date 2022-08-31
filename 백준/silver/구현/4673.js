const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let [a, b] = fs.readFileSync(file).toString().trim().split(" ");

function solution() {
  let arr = new Array(10001).fill(false);
  // arr는 길이 10001짜리 false로 가득찬 배열

  let n = 1;

  while (n < 10000) {
    let idx = n + `${n}`.split("").reduce((p, c) => +p + +c, 0);
    // idx = n + n의 각 자리수의 합
    arr[idx] = true;
    // arr에서 idx에 해당하는 값은 생성자임 === 나올 수 있음
    n++;
    //1부터 9999 까지 알아보자
  }

  let result = [];

  arr.forEach((e, index) => {
    if (!e) result.push(index);
  });
  // arr배열은 현재 false값이 self넘버임
  // false인 값만 , 즉 idx === 값임

  console.log(result.slice(1).join("\n"));
  // 0은 빼야함
}

solution();
