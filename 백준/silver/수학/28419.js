const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [N, nums] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(e => e.trim())

N = Number(N)
nums = nums.split(' ').map(Number)

const solution = () => {
  const sum = [0, 0]

  nums.forEach((num, idx) => {
    if ((idx + 1) % 2 === 1) {
      sum[0] += num
      return
    }

    sum[1] += num
  })

  const [odd, even] = sum
  const sub = Math.abs(odd - even)

  if (odd > even && N === 3) return -1

  return sub
}

console.log(solution())

// 홀수 합 짝수 합을 구한다.
// 어디가 얼만큼 큰지 구한다.
// 짝수가 크면, 양옆 홀수 있는 짝수에 연산 ㄱㄱ
// 홀수가 크면, 양옆 짝수 있는 홀수에 연산 ㄱㄱ

// 홀수가 큰데?
// 3이면 불가능
// 총 갯수가 홀수 개만큼 있는가 ?
// 3만 아니면 무조건 가능
// 총 갯수가 짝수 개 만큼 있는가?
