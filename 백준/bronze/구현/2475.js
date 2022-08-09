const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split(" ")

const square = input.map(num => num**2)
let sum = 0

for(let i = 0; i < square.length; i++){
    sum = sum + square[i]
}
console.log(sum % 10)
