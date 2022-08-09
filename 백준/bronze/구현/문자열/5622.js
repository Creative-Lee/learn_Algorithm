const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim();

let arr = ["", "", "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
function solution() {
  let time = 0;

  for (let i = 0; i < input.length; i++) {
    let index = arr.map((aStr) => aStr.indexOf(input[i])).findIndex((v) => v >= 0);
    time += index + 1;
  }

  console.log(time);
}

solution();

//필요한 작업 :
//1. 각 인덱스를 번호로 문자열 넣기

//2. 문자열에 해당하는 번호 구하기

//3. 시간 총합 구하기 2=3초
