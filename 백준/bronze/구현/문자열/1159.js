const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;
tcs = tcs.map((e) => e.trim());

function solution() {
  let map = new Map();

  for (let tc of tcs) {
    if (!map.has(tc[0])) {
      map.set(tc[0], 1);
    } else {
      map.set(tc[0], map.get(tc[0]) + 1);
    }
  }
  let test = [...map];
  let result = [];
  test.forEach((arr) => {
    if (arr[1] >= 5) result.push(arr[0]);
  });

  if (result.length) {
    console.log(result.sort((a, b) => a.localeCompare(b)).join(""));
  } else {
    console.log("PREDAJA");
  }
}

solution();
