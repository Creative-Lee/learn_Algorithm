const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [tccc, ...tcss] = fs.readFileSync(file).toString().trim().split('\n')

tccc = +tccc
tcss = tcss.map((e) => e.trim())

function solution() {
  let result = []
  for (let i = 0; i < tccc; i++) {
    let tcc = +tcss.shift()
    let tcs = tcss.splice(0, tcc)
    let map = new Map()
    for (let j = 0; j < tcs.length; j++) {
      let [name, type] = tcs[j].split(' ')
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
//30분 over
