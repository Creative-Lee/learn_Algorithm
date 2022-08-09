const fs = require('fs');
const T = +fs.readFileSync('/dev/stdin').toString().trim()

let A = 300
let B = 60
let C = 10

function solve(){
  let An = 0;
  let Bn = 0;
  let Cn = 0;
  let timeLeft = T
    
  if(timeLeft % C == 0){
    while(!(timeLeft == 0)){

      if(timeLeft - A < 0){

        if(timeLeft - B < 0){        
          timeLeft -= C
          Cn += 1
        } 

        else{
          timeLeft -= B
          Bn += 1
        }

      }

      else{
        timeLeft -= A
        An += 1
      }

    } 
    return `${An} ${Bn} ${Cn}`
  } 
  else return -1
}

console.log(solve())





