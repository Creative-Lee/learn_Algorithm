function solution(n, t, m, p) {
  let result = ''
  let order = 0

  for (let i = 0; i < Infinity; i++) {
    if (result.length === t) return result

    const radix = i.toString(n)

    for (let j = 0; j < radix.length; j++) {
      if (result.length === t) return result
      order += 1

      const num = radix[j].toUpperCase()

      if (m === p && order % m === 0) {
        result += num
        continue
      }
      if (order % m === p) {
        result += num
      }
    }
  }
}

// m 명 참가
// p 자기 순서
// t 자기가 말해야할 숫자 갯수

// p번째 마다 숫자를 구하면 됨.
// 0 1 1 0 1 1 1 0 0 1 0 1 1 1 0
