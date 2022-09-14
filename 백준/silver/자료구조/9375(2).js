const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [tcc, ...input] = fs.readFileSync(file).toString().trim().split('\n')

tcc = +tcc

function solution() {
  let result = []
  for (let i = 0; i < tcc; i++) {
    let innerTcc = +input.shift()
    tcs = input.splice(0, innerTcc).map((e) => e.trim())

    let map = new Map()
    for (let tc of tcs) {
      let [name, type] = tc.split(' ')
      if (map.has(type)) {
        map.set(type, map.get(type) + 1)
      } else {
        map.set(type, 1)
      }
    }

    result.push([...map.values()].reduce((p, c) => p * (c + 1), 1) - 1)
  }
  console.log(result.join('\n'))
}

solution()
