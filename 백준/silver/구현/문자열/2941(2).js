const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();


let alphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj','s=', 'z=']
// 



let alphabetCount = 0

for(let a of alphabet){  
  for(let i = 0; i< input.length;){
    if(input.includes(a)=== -1) continue   
    if(input.indexOf(a,i)>= 0){
      alphabetCount ++    
      i = input.indexOf(a,i) + 1  
    }else{
      i++
    }
  }
}
console.log(input.length-alphabetCount);
//input에 대하여 a의 각 요소가 각 인덱스로 찾았으면 + 1 또 찾아
