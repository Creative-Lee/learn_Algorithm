const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

let tcc = +input[0];
let tcs = input.slice(1).map((e) => e.trim());

function solution() {
  if(tcc===0){
    console.log(0)
    return
  }
  let groupCount = 0;

  for (let tc of tcs) {
    let word = tc;
    let newArr = [];
    for (let i = 0; i < word.length; i++) {
      if (!newArr.includes(word[i])) {
        newArr.push(word[i]);
      } else {
        if (word[i] === newArr[newArr.length - 1]) {
          newArr.push(word[i]);
        }
      }
    }
    if (word === newArr.join("")) {
      groupCount++;
    }
  }

  console.log(groupCount);
}
solution()