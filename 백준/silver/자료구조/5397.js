const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split('\n')

tcc = +tcc
tcs = tcs.map((e) => e.trim())

function solution() {
  let result = []

  for (let tc of tcs) {
    let left = []
    let right = []
    for (let i = 0; i < tc.length; i++) {
      switch (tc[i]) {
        case '<':
          if (left.length > 0) {
            right.push(left.pop())
          }
          break
        case '>':
          if (right.length > 0) {
            left.push(right.pop())
          }
          break
        case '-':
          if (left.length > 0) {
            left.pop()
          }
          break
        default:
          left.push(tc[i])
      }
    }
    let password = ''
    password += left.join('')
    password += right.reverse().join('')
    result.push(password)
  }

  console.log(result.join('\n'))
}

solution()
// 123 54
