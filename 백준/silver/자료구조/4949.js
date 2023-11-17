const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(e => e.trim())

const solution = () => {
  input.pop()

  const brackets = ['(', ')', '[', ']']
  const bracketMap = {
    ')': '(',
    ']': '[',
  }

  const result = input.map(d => {
    const stack = []

    for (let i = 0; i < d.length; i++) {
      const char = d[i]

      if (!brackets.includes(char)) continue

      if (char === '(' || char === '[') {
        stack.push(char)
        continue
      }

      if (stack.at(-1) === bracketMap[char]) {
        stack.pop()
        continue
      }

      return 'no'
    }

    if (stack.length !== 0) return 'no'

    return 'yes'
  })

  return result.join('\n')
}

console.log(solution())
