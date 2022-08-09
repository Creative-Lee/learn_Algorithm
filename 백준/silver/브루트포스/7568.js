const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc,...tcs] = fs.readFileSync(file).toString().trim().split("\n")
tcc= +tcc
tcs= tcs.map(e=>e.trim().split(' ').map(e=>+e))

function solution() {
  let grade = new Array(tcc).fill(1)
  
  for(let i = 0; i< tcc; i++){
    for(let j= i+1; j< tcc; j++){
      let [w,h] = tcs[i]
      let [w2,h2] = tcs[j]
      
      if(w<w2 && h<h2){
        grade[i] ++
      }
      if(w>w2 && h>h2){
        grade[j] ++
      }
    }
  }
  console.log(grade.join(' '))
}
solution();



