function solution(n) {
  let bat = 0

  while (n > 0) {
    if (n % 2 !== 0) {
      n = n - 1
      bat++
    } else {
      n = n / 2
    }
  }
  return bat
}
