const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split('\n')

tcc = +tcc
tcs = tcs.map((e) => e.trim())

function solution() {
  const boomArr = tcs.splice(0, tcc).map((e) => e.split(''))
  const openArr = tcs.map((e) => e.split(''))
  const resultArr = new Array(tcc).fill('').map((e) => new Array(tcc).fill('.'))
  let isWin = true
  const getNearBoomCount = (x1, y1) => {
    let boomCount = 0
    let move = [
      [0, -1],
      [0, 1],
      [1, 0],
      [-1, 0],
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
    ]
    for (let m of move) {
      let [mx, my] = m
      let [x2, y2] = [x1 + mx, y1 + my]

      if (0 > x2 || 0 > y2 || tcc <= x2 || tcc <= y2) continue

      if (boomArr[x2][y2] === '*') boomCount++
    }

    return boomCount
  }

  for (let i = 0; i < tcc; i++) {
    for (let j = 0; j < tcc; j++) {
      if (boomArr[i][j] === '.' && openArr[i][j] === '.') continue
      if (boomArr[i][j] === '.' && openArr[i][j] === 'x') {
        resultArr[i][j] = getNearBoomCount(i, j)
      }
      if (boomArr[i][j] === '*' && openArr[i][j] === 'x') {
        isWin = false
      }
    }
  }
  if (!isWin) {
    for (let i = 0; i < tcc; i++) {
      for (let j = 0; j < tcc; j++) {
        if (boomArr[i][j] === '*') {
          resultArr[i][j] = '*'
        }
      }
    }
  }
  console.log(resultArr.map((e) => e.join('')).join('\n'))
}
solution() // 코멘트
