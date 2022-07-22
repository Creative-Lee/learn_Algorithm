const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString()

console.log(parseInt(input, 16))
