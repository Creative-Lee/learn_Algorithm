const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [line1, line2, line3, line4, line5, ...nums] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim())

function solution() {
  let bingo = [
    line1.split(' '),
    line2.split(' '),
    line3.split(' '),
    line4.split(' '),
    line5.split(' '),
  ]
  let check = new Array(5).fill('').map((e) => new Array(5).fill(false))
  nums = nums.join(' ').split(' ')

  const getBingoCount = () => {
    let count = 0
    let diagonalCheck1 = 0
    let diagonalCheck2 = 0

    for (let i = 0; i < 5; i++) {
      if (check[i].every((e) => e)) count++ // 가로 체크

      if (check[i][i]) {
        diagonalCheck1++ // 왼쪽 위 - 오른쪽 아래 대각선 체크
      }
      if (check[i][Math.abs(i - 4)]) {
        diagonalCheck2++
      }

      let colCheck = 0
      for (let j = 0; j < 5; j++) {
        if (check[j][i]) {
          //세로 체크
          colCheck++
        }
      }
      if (colCheck === 5) count++
    }
    if (diagonalCheck1 === 5) count++
    if (diagonalCheck2 === 5) count++

    return count
  }

  for (let i = 0; i < 25; i++) {
    bingo.forEach((line, idx) => {
      if (line.includes(nums[i])) {
        check[idx][line.indexOf(nums[i])] = true
      }
    })

    if (getBingoCount() >= 3) {
      console.log(i + 1)
      return
    }
  }
}
solution()
