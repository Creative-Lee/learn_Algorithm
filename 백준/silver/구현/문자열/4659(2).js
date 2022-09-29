const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(file).toString().trim().split('\n')

input.pop()
input = input.map((e) => e.trim())

function solution() {
  let vowel = ['a', 'e', 'i', 'o', 'u']
  let result = []
  point: for (let tc of input) {
    let tcArr = tc.split('')

    if (!tcArr.some((e) => vowel.includes(e))) {
      result.push(`<${tc}> is not acceptable.`)
      continue
    }

    for (let i = 0; i < tc.length - 2; i++) {
      if (
        (vowel.includes(tc[i]) && vowel.includes(tc[i + 1]) && vowel.includes(tc[i + 2])) ||
        (!vowel.includes(tc[i]) && !vowel.includes(tc[i + 1]) && !vowel.includes(tc[i + 2]))
      ) {
        result.push(`<${tc}> is not acceptable.`)
        continue point
      }
    }
    for (let i = 0; i < tc.length - 1; i++) {
      if (tc[i] === tc[i + 1] && tc[i] !== 'e' && tc[i] !== 'o') {
        result.push(`<${tc}> is not acceptable.`)
        continue point
      }
    }
    result.push(`<${tc}> is acceptable.`)
  }
  console.log(result.join('\n'))
}
solution()
