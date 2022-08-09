const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

let target = +input;

function solution() {
  let c = []
  for (let i = target; i > 0; i--) {
    let strC = `${i}`;   
    let sum = strC
      .split("")
      .map((e) => +e)
      .reduce((p, c) => p + c);
    if (i + sum === target) {      
      c.push(i)
    }
  }
  if(c.length===0){
    console.log(0)
    return
  }
  console.log(Math.min(...c))
}
solution();
