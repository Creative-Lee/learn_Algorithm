const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split(" ")

let a = input[0]
let b = input[1]
let c= b * 2 - a

console.log(c)
