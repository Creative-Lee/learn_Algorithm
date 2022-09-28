const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split('\n')
tcc = +tcc
tcs = tcs.map((e) => e.trim())

function solution() {
  let map = new Map()
  let count = 0

  for (let tc of tcs) {
    let [num, pos] = tc.split(' ')

    if (map.get(num) !== pos) {
      if (!map.get(num)) {
        map.set(num, pos)
        continue
      }
      map.set(num, pos)
      count++
    }
  }
  console.log(count)
}
solution()
