function solution(n) {
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 1) return i
  }

  return n - 1
}
