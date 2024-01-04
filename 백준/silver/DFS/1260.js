const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [nmv, ...links] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(e => e.trim())

const [n, m, v] = nmv.split(' ').map(Number)

const solution = () => {
  const visited1 = new Array(n + 1).fill(false)
  const visited2 = new Array(n + 1).fill(false)

  const order1 = []
  const order2 = []

  const graph = Array.from({ length: n + 1 }, () => [])
  const result = []

  links.forEach(link => {
    const [x, y] = link.split(' ').map(Number)

    graph[x].push(y)
    graph[y].push(x)
  })

  graph.map(adjacentList => adjacentList.sort((a, b) => a - b))

  const dfs = nodeNum => {
    visited1[nodeNum] = true
    order1.push(nodeNum)

    for (let i = 0; i < graph[nodeNum].length; i += 1) {
      const nextNodeNum = graph[nodeNum][i]
      if (!visited1[nextNodeNum]) {
        dfs(nextNodeNum)
      }
    }
  }

  const bfs = startNode => {
    const queue = []
    queue.push(startNode)
    order2.push(startNode)
    visited2[startNode] = true

    while (queue.length !== 0) {
      const currentNode = queue.shift()

      for (let i = 0; i < graph[currentNode].length; i += 1) {
        const nextNodeNum = graph[currentNode][i]

        if (!visited2[nextNodeNum]) {
          queue.push(nextNodeNum)
          order2.push(nextNodeNum)
          visited2[nextNodeNum] = true
        }
      }
    }
  }

  dfs(v)
  bfs(v)
  result.push(order1.join(' '))
  result.push(order2.join(' '))

  return result.join('\n')
}

console.log(solution())

// 필요한 것

// 구해야하는 것

// 푸는 방식

// 풀이시간
