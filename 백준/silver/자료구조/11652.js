const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split('\n')

tcc = +tcc

tcs = tcs.map((e) => BigInt(e))
tcs.sort((a, b) => {
  if (a < b) {
    return -1
  } else if (a > b) {
    return 1
  } else {
    return 0
  }
})

function solution() {
  let count = 1
  let maxValue = tcs[0]
  let maxCount = 0

  tcs.forEach((e, idx) => {
    let next = tcs[idx + 1]
    if (e === next) {
      count++
    } else {
      count = 1
    }

    if (count > maxCount) {
      maxCount = count
      maxValue = e // 이미 정렬을 했기 때문에 같은 값이어도 변화 없음
    }
  })
  console.log(maxValue + '')
}

solution()
