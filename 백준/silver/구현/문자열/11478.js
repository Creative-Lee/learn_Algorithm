const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(file).toString().trim()
function solution() {
  let set = new Set()
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j <= input.length; j++) {
      set.add(input.substring(i, j))
    }
  }
  console.log(set.size)
}

solution()
