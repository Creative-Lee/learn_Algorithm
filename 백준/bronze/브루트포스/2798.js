const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [l1,...l2] = fs.readFileSync(file).toString().trim().split("\n");

let [cardCount,targetNum] = l1.split(' ').map(e=>+e)
let cardNumArr = l2[0].split(' ').map(E =>+E)
let max = 0

function solution() {
  for(let i = 0; i<cardCount; i++){    
    for(let j = i+1; j<cardCount; j++){
      for(let k = j+1; k<cardCount; k++){
        if(cardNumArr[i]+cardNumArr[j]+cardNumArr[k]===targetNum){
          console.log(targetNum)
          return
        }
        let sum = cardNumArr[i]+cardNumArr[j]+cardNumArr[k]
        let gap = targetNum - sum
        if(max <= sum && gap >= 0) {
          max = sum
        }        
      }
    }
  }
  console.log(max)
}
solution()