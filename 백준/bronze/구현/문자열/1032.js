const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");
tcc = +tcc;
tcs = tcs.map((e) => e.trim());

function solution() {
  if (tcs.length === 1) {
    console.log(tcs[0]);
    return;
  }

  let compereArr = tcs[0].split("");

  for (let i = 1; i < tcc; i++) {
    let splitArr = tcs[i].split("");

    compereArr = compereArr.map((l, idx) => {
      if (l === splitArr[idx]) {
        return l;
      } else {
        return "?";
      }
    });
  }
  console.log(compereArr.join(""));
}

solution();
//30분 over
