const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(file).toString().trim().split('\n')

input = input.map((e) => e.trim())

function solution() {
  let [cur, t] = input

  cur = cur.split(':').map((e) => +e)
  t = t.split(':').map((e) => +e)

  let s1 = cur[0] * 3600 + cur[1] * 60 + cur[2]
  let s2 = t[0] * 3600 + t[1] * 60 + t[2]

  let numT = s2 - s1
  let strT

  if (numT <= 0) numT += 24 * 3600

  let h = Math.floor(numT / 3600) + ''
  numT = numT % 3600
  let m = Math.floor(numT / 60) + ''
  numT = numT % 60
  let s = numT + ''

  strT = `${h.padStart(2, '0')}:${m.padStart(2, '0')}:${s.padStart(2, '0')}`
  console.log(strT)
}

solution()
