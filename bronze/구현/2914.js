const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split(" ")

let a = input[0]
let b = input[1]


let c = a * (b - 1) + 1

console.log(c)
