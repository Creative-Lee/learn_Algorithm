const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [n, nums, x] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(e => e.trim())

n = Number(n)
nums = nums.split(' ').map(Number)
x = Number(x)

const solution = () => {
  let p1 = 0
  let p2 = n - 1
  let count = 0

  nums.sort((a, b) => a - b)

  while (p1 < p2) {
    const sum = nums[p1] + nums[p2]

    if (sum === x) {
      count += 1
      p1 += 1
      p2 -= 1
      continue
    }

    if (sum > x) {
      p2 -= 1
      continue
    }

    p1 += 1
  }

  return count
}

console.log(solution())
