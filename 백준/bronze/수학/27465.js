const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const [input] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(e => e.trim())

const solution = () => {
  const num = Number(input)

  if (num <= 2) return 4

  if (num % 2 !== 0) {
    return num + 1
  }

  return num
}

console.log(solution())
