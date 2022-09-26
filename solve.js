// const fs = require('fs')
// const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
// let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split('\n')

// tcc = +tcc
// tcs = tcs.map((e) => e.trim())

function solution() {
  let arr = [1, 2, 3, 4, 5]

  console.log(arr.some((num) => num === 1)) // arr의 요소중 하나라도 1과 같은 값이 있는가?  --> true
  console.log(arr.every((num) => num > 0)) // arr의 요소 모두 0보다 큰가? --> true
  console.log(arr.every((num) => num > 1)) // arr의 요소 모두 1보다 큰가? --> false
}
solution()
