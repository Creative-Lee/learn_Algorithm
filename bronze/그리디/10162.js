const fs = require('fs');
const T = Number(fs.readFileSync('/dev/stdin'))

let A = 300
let B = 60
let C = 10

function solve(){  
  let An = 0
  let Bn = 0
  let Cn = 0  

  if(T % A % B % C == 0){
    An = Math.floor(T / A) 
    Bn = Math.floor(T % A / B) 
    Cn = Math.floor(T % A % B / C)     

    return `${An} ${Bn} ${Cn}`
  } 

  else return -1
}

console.log(solve())






