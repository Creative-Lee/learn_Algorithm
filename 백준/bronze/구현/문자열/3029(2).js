const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(file).toString().trim().split('\n')

input = input.map((e) => e.trim())

function solution() {
  let second = []
  for (let t of input) {
    let [h, m, s] = t.split(':').map((e) => +e)
    second.push(h * 3600 + m * 60 + s)
  }
  let sub = second[1] - second[0]
  if (sub <= 0) sub += 3600 * 24

  let h = Math.floor(sub / 3600) + ''
  sub %= 3600
  let m = Math.floor(sub / 60) + ''
  sub %= 60
  let s = sub + ''

  console.log(`${h.padStart(2, '0')}:${m.padStart(2, '0')}:${s.padStart(2, '0')}`)
}

solution()
