const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b] = fs.readFileSync(file).toString().trim().split(" ");

function solution() {
  const rev = (strNum) => {
    let arr = strNum.split("");
    return arr.reverse().join("");
  };
  let sum = +rev(a) + +rev(b);

  console.log(+rev(`${sum}`));
}
solution();
