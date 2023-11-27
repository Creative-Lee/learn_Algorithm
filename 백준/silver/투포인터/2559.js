const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [input1, input2] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(e => e.trim())

const [n, k] = input1.split(' ').map(Number)
const temps = input2.split(' ').map(Number)

const solution = () => {
  let sum = temps.slice(0, k).reduce((sum, v) => sum + v, 0)
  let max = sum

  let p1 = 0
  let p2 = k

  while (p2 < n) {
    sum -= temps[p1]
    sum += temps[p2]

    max = Math.max(max, sum)

    p1 += 1
    p2 += 1
  }

  return max
}

console.log(solution())
