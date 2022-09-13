const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [tcc, tcs] = fs.readFileSync(file).toString().trim().split('\n')

tcc = +tcc

function solution() {
  let str = 'pPAp'
  let count = 0

  while (tcs.includes(str)) {
    tcs = tcs.substring(tcs.indexOf(str) + 4)
    count++
  }
  console.log(count)
}

solution()
