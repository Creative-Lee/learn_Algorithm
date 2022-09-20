const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(file).toString().trim().split('\n')

function solution() {
  let arr = new Array(30).fill(false)

  for (let i of input) {
    arr[+i - 1] = true
  }

  let result = []
  arr.forEach((e, idx) => {
    if (!e) result.push(idx + 1)
  })

  result.sort((a, b) => a - b)

  console.log(result.join('\n'))
}

solution()
