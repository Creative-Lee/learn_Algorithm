const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split('\n')

tcc = +tcc
tcs = tcs.map((e) => e.trim())

function solution() {
  let board = new Array(tcc).fill('')
  board = board.map((e, idx) => tcs[idx].split(''))

  const getMaxCandyCount = () => {
    let maxCount = 1
    for (let i = 0; i < tcc; i++) {
      let count = 1
      for (let j = 0; j < tcc - 1; j++) {
        if (board[i][j] === board[i][j + 1]) {
          count++
        } else {
          maxCount = Math.max(maxCount, count)
          count = 1
        }
      }
      maxCount = Math.max(maxCount, count)
    }

    for (let i = 0; i < tcc; i++) {
      let count = 1
      for (let j = 0; j < tcc - 1; j++) {
        if (board[j][i] === board[j + 1][i]) {
          count++
        } else {
          maxCount = Math.max(maxCount, count)
          count = 1
        }
      }
      maxCount = Math.max(maxCount, count)
    }
    return maxCount
  }

  let maxCount = 1

  for (let i = 0; i < tcc; i++) {
    let count = 1

    for (let j = 0; j < tcc - 1; j++) {
      let prev = board[i][j]
      board[i][j] = board[i][j + 1]
      board[i][j + 1] = prev

      count = Math.max(count, getMaxCandyCount())

      prev = board[i][j]
      board[i][j] = board[i][j + 1]
      board[i][j + 1] = prev
    }
    maxCount = Math.max(maxCount, count)
  } //가로 모든 스왑 완료

  for (let i = 0; i < tcc; i++) {
    let count = 1

    for (let j = 0; j < tcc - 1; j++) {
      let prev = board[j][i]
      board[j][i] = board[j + 1][i]
      board[j + 1][i] = prev

      count = Math.max(count, getMaxCandyCount())

      prev = board[j][i]
      board[j][i] = board[j + 1][i]
      board[j + 1][i] = prev
    }
    maxCount = Math.max(maxCount, count)
  }

  console.log(maxCount)
}

solution()

//가로 세로 로 나눠서 접근하기
// 현재 보드 상태의 가장 긴 사탕갯수 구하는 함수를 만들기
// 사탕 스왑 후 위의 함수 실행, 다시 스왑해서 원위치
// 모든 스왑 후 가장 큰값 저장. 변수 2개?
