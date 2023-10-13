const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(e => e.trim())
  .map(Number)

const solution = input => {
  const numbers = Array.from({ length: 30 }, (_, idx) => idx + 1)

  const set = new Set(numbers)

  input.map(num => {
    if (set.has(num)) {
      set.delete(num)
    }
  })

  return [...set].join('\n')
}

console.log(solution(input))
