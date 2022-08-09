const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();
function solution() {
  if (input.length < 10) {
    console.log(input);
    return;
  }
  let line = Math.ceil(input.length / 10);
  let word = input;
  for (let i = 0; i < line; i++) {
    let arr = "";

    for (let j = 0; j < word.length; j++) {
      arr += word[j];
      if (arr.length === 10) {
        word = word.slice(10);
        break;
      }
    }
    console.log(arr);
  }
}

solution(); 
//24분

// 1 3 6 10 15
// 1 2 3 4 5
