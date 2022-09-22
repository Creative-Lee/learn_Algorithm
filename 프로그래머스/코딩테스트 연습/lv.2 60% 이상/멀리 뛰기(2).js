function solution(n) {
  let arr = [0, 1, 2]
  if (n <= 3) return n

  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1234567
  }

  return arr[n]
}
