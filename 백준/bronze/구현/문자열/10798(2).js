const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim())

function solution() {
  const maxLength = Math.max(...input.map((str) => str.length))
  const result = []

  for (let i = 0; i < maxLength; i++) {
    const newStr = []

    input.forEach((str) => {
      newStr.push(str[i] ?? '')
    })

    result.push(newStr.join(''))
  }

  console.log(result.join(''))
}
solution()
