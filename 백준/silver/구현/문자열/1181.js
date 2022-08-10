const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");
tcc = +tcc;
tcs = tcs.map((word) => word.trim());

function solution() {
  tcs.sort((a, b) => {
    if (a.length - b.length === 0) {
      return a.localeCompare(b);
    }
    return a.length - b.length;
  });

  let unique = new Set(tcs);
  let result = Array.from(unique);

  console.log(result.join("\n"));
}
solution();
//1시간over
