function solution(n) {
  let set = new Set()

  for (let i = 2; i <= n; i++) {
    set.add(i)
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (set.has(i)) {
      for (let j = i * 2; j <= n; j += i) {
        // i의 배수로 시작해서 매 반복마다 i를 더해주면 계속해서 배수가 된다.
        set.delete(j)
      }
    }
  }

  return set.size
}
