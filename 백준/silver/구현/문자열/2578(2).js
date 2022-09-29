const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim())

let bingo = input.splice(0, 5).map((e) => e.split(' '))
let nums = input.join(' ').split(' ')
let check = new Array(5).fill('').map((e) => new Array(5).fill(false))
function solution() {
  const getBingoCount = () => {
    let bingoCount = 0
    let diagonalCheck1 = 0
    let diagonalCheck2 = 0

    for (let i = 0; i < 5; i++) {
      if (check[i].every((e) => e)) bingoCount++
    }

    for (let i = 0; i < 5; i++) {
      let colCheck = 0
      for (let j = 0; j < 5; j++) {
        if (check[j][i]) colCheck++
      }
      if (colCheck === 5) bingoCount++
    }

    for (let i = 0; i < 5; i++) {
      if (check[i][i]) diagonalCheck1++
      if (check[Math.abs(i - 4)][i]) diagonalCheck2++
    }

    if (diagonalCheck1 === 5) bingoCount++
    if (diagonalCheck2 === 5) bingoCount++

    return bingoCount++
  }

  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 5; j++) {
      if (bingo[j].includes(nums[i])) {
        check[j][bingo[j].indexOf(nums[i])] = true
      }
    }
    if (getBingoCount() >= 3) {
      console.log(i + 1)
      return
    }
  }
}
solution() // 코멘트
