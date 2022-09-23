const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(file).toString().trim().split('\n')

input = input.map((e) => e.trim())
input.pop()
function solution() {
  let result = []
  input.forEach((str) => result.push(str.split('').reverse().join('')))
  console.log(result.join('\n'))
}

solution()
