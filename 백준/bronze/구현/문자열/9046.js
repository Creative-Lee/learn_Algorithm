const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split('\n')

tcc = +tcc
tcs = tcs.map((e) => e.trim())

function solution() {
  let result = []
  for (let tc of tcs) {
    tc = tc.split(' ').join('')
    let map = new Map()
    for (let i = 0; i < tc.length; i++) {
      map.set(tc[i], map.get(tc[i]) + 1 || 1)
    }

    let entries = [...map.entries()]
    let values = [...map.values()]
    let maxValue = Math.max(...values)
    let final = []

    entries.forEach((e) => {
      if (e[1] === maxValue) {
        final.push(e[0])
      }
    })

    if (final.length === 1) result.push(final[0])
    else result.push('?')
  }
  console.log(result.join('\n'))
}
solution()
