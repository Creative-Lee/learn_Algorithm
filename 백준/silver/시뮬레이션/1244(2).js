const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [sc, ss, stuC, ...stus] = fs.readFileSync(file).toString().trim().split("\n");

sc = +sc;
ss = ss
  .trim()
  .split(" ")
  .map((e) => (e === "1" ? true : false));
stuC = +stuC;

function solution() {
  for (let i = 0; i < stuC; i++) {
    let [sex, num] = stus.shift().split(" ");
    sex = +sex;
    num = +num;

    if (sex === 1) {
      ss = ss.map((boolean, idx) => ((idx + 1) % num === 0 ? !boolean : boolean));
    } else {
      ss[num - 1] = !ss[num - 1];

      let left = num - 2;
      let right = num;

      while (left >= 0 && right < sc) {
        if (ss[left] !== ss[right]) break;
        if (left < 0 || right >= sc) break;

        if (ss[left] === ss[right]) {
          ss[left] = !ss[left];
          ss[right] = !ss[right];
        }
        left--;
        right++;
      }
    }
  }

  let result = [];

  ss = ss.map((boolean) => (boolean ? 1 : 0));

  for (let i = 0; i < ss.length; i++) {
    if (i !== 0 && i % 20 === 19) {
      result.push(`${ss[i]}\n`);
      continue;
    }
    if (i === ss.length - 1) {
      result.push(`${ss[i]}`);
      continue;
    }

    result.push(`${ss[i]} `);
  }
  console.log(result.join(""));
}
solution();
// 35분
