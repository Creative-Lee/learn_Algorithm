const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [sc, ss, stuC, ...stus] = fs.readFileSync(file).toString().trim().split("\n");

sc = +sc;
let switches = ss
  .trim()
  .split(" ")
  .map((e, idx) => {
    let isOn = e === "1";
    return [idx + 1, isOn];
  }); //스위치 번호 = idx + 1 , 스위치 상태
stuC = +stuC;
stus = stus.map((e) => e.trim());

function solution() {
  for (let i = 0; i < stuC; i++) {
    let [sex, num] = stus.shift().split(" ");
    sex = +sex;
    num = +num;

    if (sex === 1) {
      switches = switches.map((arr) => {
        let isMulti = arr[0] % num === 0;
        if (isMulti) {
          return [arr[0], !arr[1]];
        }
        return arr;
      });
    } else {
      let left = num - 1 - 1;
      let right = num - 1 + 1;

      switches[num - 1][1] = !switches[num - 1][1];

      while (true) {
        if (left === -1) break;
        if (right === sc) break;
        if (switches[left][1] !== switches[right][1]) break;

        if (switches[left][1] === switches[right][1]) {
          switches[left][1] = !switches[left][1];
          switches[right][1] = !switches[right][1];
        }
        left--;
        right++;
      }
    }
  }

  let sState = switches.map((arr) => (arr[1] === true ? "1" : "0"));
  let result = [];
  for (i = 0; i < sState.length; i++) {
    if (i !== 0 && i % 20 === 19) {
      result.push(sState[i]);
      result.push("\n");
      continue;
    }
    if (i === sState.length - 1) {
      result.push(sState[i]);
      continue;
    }
    result.push(sState[i]);
    result.push(" ");
  }
  console.log(result.join(""));
}
solution();
//4시간
