const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");
tcc = +tcc;
tcs = tcs.map((e) => +e);
function solution() {
  let sortedArr = tcs.sort((a, b) => a - b);
  let average = Math.round(tcs.reduce((p, c) => p + c, 0) / tcc);
  let middle = sortedArr[Math.floor(tcc / 2)];

  let map = new Map();

  for (let i = 0; i < tcc; i++) {
    if (map.has(tcs[i])) {
      map.set(tcs[i], map.get(tcs[i]) + 1);
      continue;
    }
    map.set(tcs[i], 1);
  }

  let appearCount = [...map.values()];
  let num = [...map.keys()];
  let maxCount = Math.max(...appearCount);
  let maxNumArr = [];
  map.forEach((val, key) => {
    if (val === maxCount) maxNumArr.push(key);
  });
  maxNumArr = maxNumArr.sort((a, b) => a - b);

  let maxAppear = maxNumArr.length > 1 ? maxNumArr[1] : maxNumArr[0];

  let range = sortedArr[sortedArr.length - 1] - sortedArr[0];

  console.log(+(average + ""));
  console.log(middle);
  console.log(maxAppear);
  console.log(range);
}
solution();
