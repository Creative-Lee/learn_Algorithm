// const fs = require('fs')
// const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
// let input = fs.readFileSync(file).toString().trim().split('\n')

// input = input.map((e) => e.trim())

function solution() {
  let str = '비밀코드'

  let cut1 = str.slice(0, 2)
  let start = cut1.padEnd(4, '*') // 길이가 4가 될때까지 뒤 쪽에 '*' 을 추가

  let cut2 = str.slice(2)
  let end = cut2.padStart(4, '*') // 길이가 4가 될때까지 앞 쪽에 '*' 을 추가

  console.log(start) // 비밀**
  console.log(end) // **코드
}

solution()
