const fs = require("fs");
let I = fs.readFileSync("./input.txt").toString().trim().split('\n')

let numArr = I.map(E => E = Number(E))

let max = Math.max(...numArr)
let index = numArr.findIndex(e=>e === max) +1

console.log(max) 
console.log(index)
