const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split('\n')

function solution() {}

solution()
