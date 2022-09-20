const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('')
  .map((e) => +e)

function solution() {
  let arr = []
  for (let i = 0; i < input.length; i++) {
    let binary = input[i].toString(2)
    if (i === 0) {
      arr.push(binary)
      continue
    }
    arr.push('0'.repeat(3 - binary.length) + binary)
  }
  console.log(arr.join(''))
}

solution()
