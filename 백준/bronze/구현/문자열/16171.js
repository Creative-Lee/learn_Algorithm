const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [s, k] = fs.readFileSync(file).toString().trim().split('\n')

s = s.trim()

function solution() {
  let filterd = ''
  for (let a of s) {
    if (!(48 <= a.charCodeAt() && a.charCodeAt() <= 57)) {
      filterd += a
    }
  }

  if (filterd.includes(k)) {
    console.log(1)
  } else {
    console.log(0)
  }
}
solution()
