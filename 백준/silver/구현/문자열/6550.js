const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(file).toString().trim().split('\n')

input = input.map((e) => e.trim())
function solution() {
  let result = []
  for (let tc of input) {
    let [s, t] = tc.split(' ')

    isSub = true
    for (let i = 0; i < s.length; i++) {
      if (t.includes(s[i])) {
        t = t.slice(t.indexOf(s[i]) + 1)
      } else {
        isSub = false
        break
      }
    }
    if (isSub) {
      result.push('Yes')
    } else {
      result.push('No')
    }
  }
  console.log(result.join('\n'))
}
solution()
