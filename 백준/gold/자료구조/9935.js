const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const [str, bomb] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(e => e.trim())

const solution = () => {
  const stack = []

  for (let i = 0; i < str.length; i += 1) {
    const cur = str[i]
    stack.push(cur)

    if (cur === bomb.at(-1)) {
      const sliced = stack.slice(-bomb.length)

      if (sliced.join('') === bomb) {
        stack.splice(-bomb.length)
      }
    }
  }

  const joined = stack.join('')
  return joined === '' ? 'FRULA' : joined
}

console.log(solution())

// 1시간 + 해설
