const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;
tcs = tcs.map((e) => e.trim());

function solution() {
  let arr = new Array(tcc).fill("");
  arr = arr.map((e, idx) => tcs[idx].split(""));

  const candyCount = () => {
    let result = 1;

    for (let i = 0; i < tcc; i++) {
      let count = 1;
      for (let j = 0; j < tcc - 1; j++) {
        if (arr[i][j] === arr[i][j + 1]) {
          count++;
        } else {
          result = Math.max(result, count);
          count = 1;
        }
      }
      result = Math.max(result, count);
    }

    for (let i = 0; i < tcc; i++) {
      let count = 1;
      for (let j = 0; j < tcc - 1; j++) {
        if (arr[j][i] === arr[j + 1][i]) {
          count++;
        } else {
          result = Math.max(result, count);
          count = 1;
        }
      }
      result = Math.max(result, count);
    }

    return result;
  };

  let result = 1;

  for (let i = 0; i < tcc; i++) {
    for (let j = 0; j < tcc - 1; j++) {
      let cur = arr[i][j];
      arr[i][j] = arr[i][j + 1];
      arr[i][j + 1] = cur;
      result = Math.max(result, candyCount());
      cur = arr[i][j];
      arr[i][j] = arr[i][j + 1];
      arr[i][j + 1] = cur; // 되돌려 놓기

      cur = arr[j][i];
      arr[j][i] = arr[j + 1][i];
      arr[j + 1][i] = cur;
      result = Math.max(result, candyCount());
      cur = arr[j][i];
      arr[j][i] = arr[j + 1][i];
      arr[j + 1][i] = cur;
    }
  }

  console.log(result);
  // arr의 현재상태 기준으로 최대 사탕개수 구하는 함수
  // 가로: count는 1로 초기화.
  //       왼쪽에서 오른쪽으로 확인하면서 같으면 count++,
  //       다르면 result를 result와 count 값중 큰 값으로 바꾸고 count를 1로 초기화
  // arr 교환의 모든 경우의 수 마다 위의 함수 실행
  // 최종 result는 result와 함수 실행의 count값중 큰 값으로 바꾼다.
}

solution();
