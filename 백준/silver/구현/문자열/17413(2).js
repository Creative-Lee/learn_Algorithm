const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

function solution() {
  let result = [];
  let process = [];

  let arr = input.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "<") {
      result.push(arr.slice(i, arr.indexOf(">", i) + 1).join(""));
      i = arr.indexOf(">", i);
    } else {
      if (arr[i] === " ") {
        process.reverse().push(" ");
        result.push(process.join(""));
        process = [];
        continue;
      }
      if (arr[i + 1] === "<" || i + 1 === arr.length) {
        process.push(arr[i]);
        process.reverse();
        result.push(process.join(""));
        process = [];
        continue;
      }

      process.push(arr[i]);
    }
  }

  console.log(result.join(""));
}

solution();

// input 배열로 스플릿
// 일반적으로는 input[i]를 process에 푸시, 공백 만나면 프로세스 리버스, 조인 후 문자열로 result에 푸시

// < 만나면 < 의 인덱스 기준으로 > 를 찾음 input.slice (<의 인덱스, > 찾은 인덱스 + 1)   slice는 endIndex 전까지만 자름
// 자른 배열 조인해서 그대로 result에 푸시
