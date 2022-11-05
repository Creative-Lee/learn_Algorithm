function solution(a, b, n) {
  let result = 0
  while (true) {
    const coke = Math.floor(n / a) * b
    result += coke
    const lestCoke = n % a

    n = coke + lestCoke
    if (n < a) break
  }
  return result
}
