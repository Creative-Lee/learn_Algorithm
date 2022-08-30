const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let [a, b] = fs.readFileSync(file).toString().trim().split(" ");

function solution() {
  let arr = new Array(10000).fill(0);
  arr = arr.map((e, idx) => idx);

  let num = [1, 3, 5, 7, 9, 20, 31, 42, 53, 64, 75, 86, 97];

  for (let n of num) {
    while (n <= 10000) {
      let notSelf = 0;
      let reduce = `${n}`.split("").reduce((p, c) => +p + +c, 0);
      notSelf = reduce + n;
      if (notSelf >= 10000) break;
      arr[notSelf] = "";
      n = notSelf;
    }
  }
  console.log(arr.join("\n"));
}
solution();
