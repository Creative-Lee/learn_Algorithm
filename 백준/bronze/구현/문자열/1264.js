const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(file).toString().trim().split('\n')
input.pop()

function solution() {
  let target = ['a', 'e', 'i', 'o', 'u']
  let result = []

  for (let str of input) {
    let count = 0
    let small = str.toLowerCase().split('')

    for (let t of target) {
      count += small.filter((e) => e === t).length
    }
    result.push(count)
  }
  console.log(result.join('\n'))
}

solution()
