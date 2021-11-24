const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split(" ")

let a = BigInt(input[0])
let b = BigInt(input[1])

console.log((a+b).toString())
