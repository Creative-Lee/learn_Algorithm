function solution(n, a, b) {
  const nextNum = (n) => {
    return Math.floor((n + 1) / 2)
  }
  let count = 0

  while (a !== b) {
    a = nextNum(a)
    b = nextNum(b)
    count++
  }
  return count
}
// 다음 번호를 구하는 함수
// A,B의 다음 번호가 같으면 종료
