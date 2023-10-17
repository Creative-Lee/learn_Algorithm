function solution(n, a, b) {
  const totalRound = Math.log2(n)

  for (let i = 0; i < totalRound; i++) {
    a = Math.ceil(a / 2)
    b = Math.ceil(b / 2)

    if (a === b) return i + 1
  }
}
