const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [n, target] = fs.readFileSync(file).toString().trim().split('\n')
n = +n
target = +target

function solution() {
  let result = new Array(n).fill('').map((e) => new Array(n).fill(0))

  let x1 = 0
  let y1 = 0
  let targetCord
  let resultNum = n * n
  let move = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]
  let moveNum = 0

  while (resultNum > 0) {
    result[x1][y1] = resultNum--
    if (result[x1][y1] === target) targetCord = `${x1 + 1} ${y1 + 1}`

    let [mx, my] = move[moveNum]
    x1 += mx
    y1 += my

    if (result[x1] === undefined || result[x1][y1] === undefined || result[x1][y1] !== 0) {
      x1 -= mx
      y1 -= my
      if (moveNum === 3) moveNum = 0
      else moveNum++
      let [nmx, nmy] = move[moveNum]

      x1 += nmx
      y1 += nmy
    }
  }
  console.log(result.map((e) => e.join(' ')).join('\n'))
  console.log(targetCord)
}
solution()
