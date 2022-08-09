const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim();

let capital = input.toUpperCase();

let arr = new Array(26).fill(-1);

function solution() {
  arr = arr.map((a, index) => {
    if (capital.indexOf(String.fromCharCode(index + 65)) !== -1) {
      return capital.indexOf(String.fromCharCode(index + 65));
    } else {
      return a;
    }
  });

  let result = arr.join(" ");
  console.log(result);
}
solution();
