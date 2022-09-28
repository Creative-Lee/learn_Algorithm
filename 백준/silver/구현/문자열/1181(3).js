const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split('\n')
tcc = +tcc
tcs = tcs.map((e) => e.trim())

function solution() {
  let arr = [...new Set(tcs)]
  arr.sort((a, b) => {
    if (a.length === b.length) {
      return a.localeCompare(b)
    } else {
      return a.length - b.length
    }
  })

  console.log(arr.join('\n'))
}
solution()
