const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [T, ...input] = fs.readFileSync(file).toString().trim().split('\n')
T = +T

function solution() {
  let result = []
  for (let i = 0; i < T; i++) {
    let tcc = +input.shift()
    let tcs = input
      .shift()
      .split(' ')
      .map((e) => +e)

    let min = Math.min(...tcs)
    let max = Math.max(...tcs)
    result.push(`${min} ${max}`)
  }
  console.log(result.join('\n'))
}

solution()
