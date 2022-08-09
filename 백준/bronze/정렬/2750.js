const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc,...tcs] = fs.readFileSync(file).toString().trim().split("\n")
tcc= +tcc
tcs= tcs.map((e=>+e))


function solution() {
  tcs.sort((a,b)=>a-b)
  let i=0
  while(i!==tcc){
    console.log(tcs[i])
    i++
  }  
}
solution();



