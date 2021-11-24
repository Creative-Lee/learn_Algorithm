const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(n=>parseInt(n))
let [a,b,c] = input

console.log((a+b)%c)
console.log(((a%c)+(b%c))%c)
console.log((a*b)%c)
console.log(((a%c)*(b%c))%c)