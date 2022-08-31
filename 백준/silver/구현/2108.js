const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");
tcc = +tcc;
tcs = tcs.map((e) => +e);
function solution() {
  let average = +(tcs.reduce((p, c) => p + c, 0) / tcc).toFixed();
  let mid = tcs.sort((a, b) => a - b)[Math.floor(tcc / 2)];

  let map = new Map();
  for (let i = 0; i < tcc; i++) {
    if (map.get(tcs[i])) {
      map.set(tcs[i], map.get(tcs[i]) + 1);
      continue;
    }
    map.set(tcs[i], 1);
  }
  let arr = [...map.entries()];
  let count = arr.map((e) => e[1]);
  let maxCount = Math.max(...count);
  let maxValue = [];
  arr.forEach((e) => {
    if (e[1] === maxCount) maxValue.push(e[0]);
  });

  let sortedValue = maxValue.sort((a, b) => a - b);

  let max = sortedValue.length > 1 ? sortedValue[1] : sortedValue[0];
  let range = Math.max(...tcs) - Math.min(...tcs);

  let result = [];
  result.push(average);
  result.push(mid);
  result.push(max);
  result.push(range);
  console.log(result.join("\n"));
}

solution();
//1시간
