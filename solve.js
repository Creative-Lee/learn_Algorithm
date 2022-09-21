// const fs = require('fs')
// const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
// let [cash, prices] = fs.readFileSync(file).toString().trim().split('\n')

// cash = +cash
// prices = prices.split(' ').map((e) => +e)
let input = [-2, -1, 0, 1, 1, 2]

function solution() {
  let leftPointer = 0 // 왼쪽 끝
  let rightPointer = input.length - 1 // 오른쪽 끝

  while (leftPointer < rightPointer) {
    let sum = input[leftPointer] + input[rightPointer]
    if (sum === 0) {
      console.log([input[leftPointer], input[rightPointer]])
      return
    }
    if (sum > 0) {
      rightPointer--
    } else {
      leftPointer++
    }
  }
}

solution() // [-2, 2]
