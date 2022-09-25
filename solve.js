const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split('\n')

tcc = +tcc
tcs = tcs.map((e) => e.trim())

function solution() {
  let result = []
  for (let tc of tcs) {
    let [iter, str] = tc.split(' ')
    let sum = ''
    for (let i = 0; i < str.length; i++) {
      sum += str[i].repeat(iter)
    }
    result.push(sum)
  }
  console.log(result.join('\n'))
}
solution()
