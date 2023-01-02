const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [tcc, ...tcs] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim())

function solution() {
  const result = tcs.reduce((count, str) => {
    const stack = []

    for (let letter of str) {
      if (stack.includes(letter) && stack.at(-1) !== letter) {
        return count
      }

      stack.push(letter)
    }

    count += 1
    return count
  }, 0)

  console.log(result)
}
solution()
