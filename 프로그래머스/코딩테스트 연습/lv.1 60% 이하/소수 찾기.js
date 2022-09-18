function solution(n) {
  let set = new Set()
  for (let i = 2; i <= n; i++) {
    set.add(i)
  }

  for (let i = 2; i < Math.sqrt(n); i++) {
    // 2부터 n의 제곱근보다 작은 최대 정수까지
    if (set.has(i)) {
      // 지웠으면 패스
      for (let j = i * 2; j <= n; j += i) {
        set.delete(j) // 그 수를 제외하고 그 수의 배수는 모두 삭제
      }
    }
  }
  return set.size
}
