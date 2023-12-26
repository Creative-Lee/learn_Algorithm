const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [nm, ...input] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(e => e.trim())

const [n, m] = nm.split(' ').map(Number)

const visited = Array.from({ length: n }, () => new Array(m).fill(false))
const map = input.map(v => v.split(''))
let count = 0

const dfs = (x, y) => {
  if (x < 0 || n - 1 < x || y < 0 || m - 1 < y) return

  visited[x][y] = true
  const cur = map[x][y]

  if (cur === '-') {
    if (m - 1 >= y + 1 && cur === map[x][y + 1]) {
      dfs(x, y + 1)
    }
  }

  if (cur === '|') {
    if (n - 1 >= x + 1 && cur === map[x + 1][y]) {
      dfs(x + 1, y)
    }
  }
}

const solution = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (visited[i][j]) continue

      dfs(i, j)
      count += 1
    }
  }

  return count
}

console.log(solution())
