const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split('\n')

tcc = +tcc
tcs = tcs.map((e) => BigInt(e))

tcs.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))

function solution() {
  let count = 1
  let maxCount = 1
  let maxValue = tcs[0]
  for (let i = 0; i < tcc; i++) {
    if (tcs[i] === tcs[i + 1]) {
      count++
    } else {
      count = 1
    }
    if (maxCount < count) {
      maxCount = count
      maxValue = tcs[i]
    }
  }

  console.log(maxValue + '')
}

solution()
