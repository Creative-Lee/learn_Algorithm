const fs = require("fs")
const [input1,input2] = fs.readFileSync("/dev/stdin").toString().split('\n').map(input=>input.split(' '))

const realVisitors = Number(input1[0] * input1[1])

const gap = input2.map(articleVisitor => Number(articleVisitor) - realVisitors)

console.log(...gap)


