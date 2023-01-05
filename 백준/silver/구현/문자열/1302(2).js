const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;
tcs = tcs.map((e) => e.trim());

function solution() {
  let countList = {};
  for (let tc of tcs) { 
    if (!countList[tc]) {
      countList[tc] = 1;
    } else {
      countList[tc] += 1;
    }
  }

  let name = Object.keys(countList);
  let count = Object.values(countList);

  let targetIdx = [];

  count.forEach((c, index) => {
    const maxCount = Math.max(...count)

    if (c === maxCount) {
      targetIdx.push(index);
    }
  });

  let result = targetIdx.map((e) => {
    return name[e];
  });

  result.sort((a, b) => a.localeCompare(b))[0]

  console.log(result);
}

solution();
