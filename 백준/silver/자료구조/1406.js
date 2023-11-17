const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const [text, count, ...commands] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(e => e.trim())

const solution = () => {
  const commandMap = {
    L: (l, r) => {
      if (l.length === 0) return [l, r]
      r.push(l.pop())

      return [l, r]
    },
    D: (l, r) => {
      if (r.length === 0) return [l, r]
      l.push(r.pop())

      return [l, r]
    },
    B: (l, r) => {
      if (l.length === 0) return [l, r]

      l.pop()

      return [l, r]
    },
    P: (l, char) => {
      l.push(char)

      return l
    },
  }

  let left = [...text]
  let right = []

  commands.forEach(command => {
    const [com, t] = command.split(' ')

    if (t) {
      const newL = commandMap.P(left, t)

      left = newL
      return
    }

    const [newL, newR] = commandMap[com](left, right)
    left = newL
    right = newR
  })

  return [...left, ...right.reverse()].join('')
}

console.log(solution())

// 커서의 위치는 어떻게?
//
