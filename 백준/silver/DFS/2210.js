const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(e => e.trim())

input = input.map(v => v.split(' '))

const solution = () => {
  const combi = new Set()
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]

  const dfs = (i, j, num) => {
    if (num.length === 6) {
      combi.add(num)
      return
    }

    dir.forEach(d => {
      const [dx, dy] = d
      const [mx, my] = [i + dx, j + dy]

      if (0 > mx || 0 > my || 4 < mx || 4 < my) return

      dfs(mx, my, num + input[mx][my])
    })
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      dfs(i, j, '')
    }
  }

  return combi.size
}

console.log(solution())

// 필요한 것

// 구해야하는 것

// 푸는 방식

// 풀이시간
