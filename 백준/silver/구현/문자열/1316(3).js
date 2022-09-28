const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split('\n')
tcc = +tcc
tcs = tcs.map((e) => e.trim())

function solution() {
  let count = tcc
  for (let tc of tcs) {
    let dupCheck = []
    let stack = []
    for (let a of tc) {
      if (stack[stack.length - 1] !== a) {
        if (dupCheck.includes(a)) {
          count--
          break
        }
        dupCheck.push(stack[stack.length - 1])
      }
      stack.push(a)
    }
  }

  console.log(count)
}
solution()
