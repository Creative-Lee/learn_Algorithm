const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [tcc, ...input] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(e => e.trim())

const solution = () => {
  const result = []

  for (let i = 0; i < Number(tcc); i += 1) {
    const [m, n, k] = input.shift().split(' ').map(Number)
    const ground = Array.from({ length: m }, () => new Array(n).fill(0))
    const kCord = input.splice(0, k)
    let count = 0

    const dfs = (x, y) => {
      ground[x][y] = 2

      const dir = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ]

      dir.forEach(d => {
        const [dx, dy] = d
        const [mx, my] = [x + dx, y + dy]

        if (0 > mx || mx > m - 1 || 0 > my || my > n - 1) return

        if (ground[mx][my] === 1) {
          dfs(mx, my)
        }
      })
    }

    kCord.forEach(cord => {
      const [x, y] = cord.split(' ').map(Number)

      ground[x][y] = 1
    })

    for (let i = 0; i < m; i += 1) {
      for (let j = 0; j < n; j += 1) {
        if (ground[i][j] !== 1) continue

        dfs(i, j)
        count += 1
      }
    }

    result.push(count)
  }

  return result.join('\n')
}

console.log(solution())

// 필요한 것.

// 구해야하는 것

// 푸는 방식
// 1. 배추 좌표 모두 기록
// 2. 이중포문으로 순회하며 상하좌우 확인하고 배추 있으면 재귀
// 3. 포문 내부에서는 카운팅과 방문 확인을 함. (재귀 함수 실행 횟수가 곧 카운트 횟수)

// 풀이시간
// 45분
