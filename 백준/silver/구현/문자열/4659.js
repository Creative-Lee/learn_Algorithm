const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(file).toString().trim().split('\n')

input.pop()
input = input.map((e) => e.trim())

function solution() {
  let pass = 'is acceptable.'
  let fail = 'is not acceptable.'
  let vowel = ['a', 'e', 'i', 'o', 'u']
  let consonant = [
    'b',
    'c',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'm',
    'n',
    'p',
    'q',
    'r',
    's',
    't',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]
  let result = []

  for (let str of input) {
    let isPass = true
    let strArr = str.split('')
    if (!strArr.some((e) => vowel.includes(e))) {
      result.push(`<${str}> ${fail}`)
      continue
    }

    let vowelOrConsonant = strArr.map((e) => {
      if (vowel.includes(e)) return 'v'
      return 'c'
    })
    for (let i = 0; i < vowelOrConsonant.length - 2; i++) {
      if (
        vowelOrConsonant[i] === vowelOrConsonant[i + 1] &&
        vowelOrConsonant[i + 1] === vowelOrConsonant[i + 2]
      ) {
        isPass = false
        break
      }
    }
    if (!isPass) {
      result.push(`<${str}> ${fail}`)
      continue
    }

    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        if (str[i] !== 'e' && str[i] !== 'o') {
          isPass = false
          break
        }
      }
    }
    if (isPass) {
      result.push(`<${str}> ${pass}`)
    } else {
      result.push(`<${str}> ${fail}`)
    }
  }
  console.log(result.join('\n'))
}
solution()
