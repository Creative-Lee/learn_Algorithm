const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [nm, ...input] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(e => e.trim())

const [n, m] = nm.split(' ').map(Number)

const solution = () => {
  const visited = Array.from({ length: n }, () => new Array(m).fill(false))
  let count = 0

  const dfs = (i, j) => {
    const cur = input[i][j]
    visited[i][j] = true

    if (cur === '-') {
      if (m > j + 1 && cur === input[i][j + 1]) {
        dfs(i, j + 1)
      }
    }

    if (cur === '|') {
      if (n > i + 1 && cur === input[i + 1][j]) {
        dfs(i + 1, j)
      }
    }
  }

  for (let i = 0; i <= n - 1; i += 1) {
    for (let j = 0; j <= m - 1; j += 1) {
      if (visited[i][j]) continue

      dfs(i, j)
      count += 1
    }
  }

  return count
}

console.log(solution())

// 필요한 것.
// 방문 배열

// 구해야하는 것
// 나무 판자 갯수 -> 이어진 판자들 카운트

// 푸는 방식
// 방문 배열에 체크를 한다.
// 현재 - 이면 우측 이동한 곳의 판자가 - 인지 확인한다.
// - 이면 이동
// - 아닌걸 만나면 카운트 올리고 다음 블럭 검사
