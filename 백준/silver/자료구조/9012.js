const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const [count, ...pss] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(e => e.trim())

const solution = () => {
  const result = pss.map(brackets => {
    const stack = []

    for (let i = 0; i < brackets.length; i++) {
      const bracket = brackets[i]

      if (bracket === '(') {
        stack.push(bracket)
        continue
      }

      if (stack.at(-1) === '(') {
        stack.pop()
        continue
      }

      return 'NO'
    }

    if (stack.length !== 0) return 'NO'

    return 'YES'
  })

  return result.join('\n')
}

console.log(solution())
