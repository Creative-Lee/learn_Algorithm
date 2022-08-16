const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();
input = +input;

function solution() {
  let pp = [93, 30, 55];
  let ss = [1, 30, 5];

  let answer = pp.reduce((resultArr, p, idx) => {
    let speed = ss[idx];
    let endDate = Math.ceil((100 - p) / speed);
    let result = resultArr[resultArr.length - 1];
    console.log(resultArr);
    if (result && result[0] >= endDate) {
      result.push(endDate);
    } else {
      resultArr.push([endDate]);
    }
    return resultArr;
  }, []);

  return answer.map((arr) => arr.length);
}
solution();
