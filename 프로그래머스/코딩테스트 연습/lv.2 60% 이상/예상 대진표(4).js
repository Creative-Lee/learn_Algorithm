function solution(n, a, b) {
  let round = 0

  for (let i = 0; i < Math.log2(n); i++) {
    if (a === b) return round
    a = Math.ceil(a / 2)
    b = Math.ceil(b / 2)
    round += 1
  }
  return round
}

const isOdd = n => n % 2 !== 0
