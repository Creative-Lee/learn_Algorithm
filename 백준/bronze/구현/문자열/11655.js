const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let s = fs.readFileSync(file).toString();

function solution() {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let char = s[i].charCodeAt();
    if (65 <= char && char <= 90) {
      char += 13;
      if (char > 90) {
        char -= 26;
      }
    }
    if (97 <= char && char <= 122) {
      char += 13;
      if (char > 122) {
        char -= 26;
      }
    }
    result += String.fromCharCode(char);
  }

  console.log(result);
}
// A 65 Z 90 a 97 z 122
solution();
// 15분
