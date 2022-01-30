const fs = require('fs');
const T = +fs.readFileSync('./input.txt').toString().trim()

let A = 300
let B = 60
let C = 10

function solve(){   
  if(T % A % B % C == 0){
    
    while(true){
      let An = T - A 
    }

    let An = T-A
    let Bn = Math.floor(T % A / B) 
    let Cn = Math.floor(T % A % B / C)    

    return `${An} ${Bn} ${Cn}`
  } 

  else return -1
}

console.log(solve())





