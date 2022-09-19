function solution(n) {
  let count = 1

  for (let i = 1; i <= n / 2; i++) {
    let sum = 0
    for (let j = i; i <= n; j++) {
      sum += j
      if (sum === n) {
        count++
        break
      }
      if (sum > n) break
    }
  }
  return count
}
