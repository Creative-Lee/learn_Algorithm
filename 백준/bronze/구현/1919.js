const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [str1, str2] = fs.readFileSync(file).toString().trim().split('\n')

str1 = str1.trim()

function solution() {
  let dup = 0

  let arr1 = str1.split('')
  let arr2 = str2.split('')
  let totalLength = arr1.length + arr2.length

  for (let e of arr1) {
    if (arr2.includes(e)) {
      arr2.splice(arr2.indexOf(e), 1)
      dup++
    }
  }

  console.log(totalLength - dup * 2)
}
solution()

// 조건이 따로 없지만, 아마도 애너그램은 length가 같은 단어 2개로 하는듯
// 제거해야하는 개수 === 둘의 length합 - (서로 겹친경우의 수 * 2)
