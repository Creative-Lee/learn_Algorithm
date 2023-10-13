const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [T, ...N] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(e => e.trim())

const solution = () => {
  const numbers = N.filter((_, idx) => idx % 2 !== 0)

  const minMax = numbers.map(number => {
    const sortedArr = number
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b)

    return `${sortedArr[0]} ${sortedArr.at(-1)}`
  })

  return minMax.join('\n')
}

console.log(solution())
