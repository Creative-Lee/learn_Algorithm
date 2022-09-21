function solution(n, a, b) {
  let round = 0
  let nextNum = (n) => {
    return Math.floor((n + 1) / 2)
  }

  while (a !== b) {
    a = nextNum(a)
    b = nextNum(b)
    round++
  }
  return round
}
