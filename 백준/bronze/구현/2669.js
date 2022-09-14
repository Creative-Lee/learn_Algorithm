const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim())

function solution() {
  // let arr = new Array(100).fill(0).map(() => new Array(100).fill(false))
  let arr = Array.from(new Array(100), () => new Array(100).fill(false))

  let count = 0
  let dup = 0

  for (let sq of input) {
    let [x1, y1, x2, y2] = sq.split(' ').map((e) => +e)

    for (let i = x1; i < x2; i++) {
      for (let j = y1; j < y2; j++) {
        if (arr[i][j] === false) {
          arr[i][j] = !arr[i][j]
        } else {
          dup++
        }
        count++
      }
    }
  }
  console.log(count - dup)
}

solution()
