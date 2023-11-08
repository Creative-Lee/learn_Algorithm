const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const [computerCount, pairCount, ...pairs] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(e => e.trim())

const solution = () => {
  const visited = new Array(Number(computerCount)).fill(false)

  const graph = Array.from({ length: Number(computerCount) }, () => new Array())

  pairs.forEach(pair => {
    const [start, end] = pair.split(' ').map(Number)

    graph[start - 1].push(end - 1)
    graph[end - 1].push(start - 1)
  })

  const dfs = nodeNum => {
    visited[nodeNum] = true

    for (let i = 0; i < graph[nodeNum].length; i++) {
      const nextNodeNum = graph[nodeNum][i]

      if (!visited[nextNodeNum]) {
        dfs(nextNodeNum)
      }
    }
  }

  dfs(0)

  return visited.filter(v => v === true).length - 1
}

console.log(solution())
