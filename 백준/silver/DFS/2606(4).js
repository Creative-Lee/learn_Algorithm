const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [comN, linkN, ...links] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(e => e.trim())

comN = Number(comN)
linkN = Number(linkN)

const solution = () => {
  const graph = Array.from({ length: comN }, () => [])
  const visited = new Array(comN).fill(false)

  links.forEach(link => {
    const [start, end] = link.split(' ')

    graph[start - 1].push(end)
    graph[end - 1].push(start)
    // idx 0이 1번 컴퓨터
  })

  const dfs = comN => {
    visited[comN - 1] = true

    for (let i = 0; i < graph[comN - 1].length; i += 1) {
      const next = graph[comN - 1][i]

      if (!visited[next - 1]) {
        dfs(next)
      }
    }
  }

  dfs(1)

  return visited.filter(v => v).length - 1
}

console.log(solution())

// 필요한 것.
// 1. 양방향 그래프
// 2. 방문용 배열

// 구해야하는 것
// 바이러스 걸린 컴퓨터 수 -> 방문체크 true의 갯수

// 푸는 방식
// 링크로 그래프 만들고
// 각 컴퓨터의 번호는 1부터 시작하니 방문배열에 보정해서 체크

// 풀이시간
// 18분
