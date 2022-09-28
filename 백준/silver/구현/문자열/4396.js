const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split('\n')
tcc = +tcc
tcs = tcs.map((e) => e.trim())
let boomArr = tcs.splice(0, tcc).map((e) => e.split(''))
let openArr = tcs.map((e) => e.split(''))

function solution() {
  let resultArr = new Array(tcc).fill('').map((e) => new Array(tcc).fill('.'))
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
    ] // 왼, 오, 아래, 위, 왼위, 오위, 왼아, 오아
    for (let i = 0; i < 8; i++) {
      let [mx, my] = move[i]
      let [x2, y2] = [x1 + mx, y1 + my]
      if (0 > x2 || x2 >= tcc || 0 > y2 || y2 >= tcc) continue
      if (boomArr[x2][y2] === '*') boomCount++
    }

    return boomCount
  }

  for (let i = 0; i < tcc; i++) {
    for (let j = 0; j < tcc; j++) {
      if (boomArr[i][j] === '.' && openArr[i][j] === '.') continue
      if (boomArr[i][j] === '.' && openArr[i][j] === 'x') {
        resultArr[i][j] = getNearBoomCount(i, j)
        continue
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
solution()
