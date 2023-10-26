const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [T, ...N] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(e => e.trim())

const solution = () => {
  const graph = Array.from({ length: Number(T) + 1 }, () => new Array())
  const visited = new Array(Number(T) + 1).fill(false)

  N.shift()
  N.forEach(n => {
    const [start, end] = n.split(' ').map(Number)
    graph[start].push(end)
    graph[end].push(start)
  })

  const dfs = nodeNum => {
    visited[nodeNum] = true // 방문처리

    for (let i = 0; i < graph[nodeNum].length; i++) {
      const nextNodeNum = graph[nodeNum][i]
      if (!visited[nextNodeNum]) {
        dfs(nextNodeNum)
      }
    }
  }

  dfs(1)

  return visited.filter(v => v === true).length - 1
}

console.log(solution())
