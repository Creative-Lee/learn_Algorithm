function solution(n) {
  let arr = new Array(n + 1).fill(0)
  arr[1] = 1

  const fibo = () => {
    for (let i = 2; i <= n; i++) {
      arr[i] = (arr[i - 2] + arr[i - 1]) % 1234567
    }
  }
  fibo()

  return arr[n]
}
