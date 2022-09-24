function solution(c) {
  c.sort((a, b) => a - b)
  let hIdx = []
  for (let i = 0; i <= Math.max(...c); i++) {
    if (i <= c.filter((e) => e >= i).length) {
      hIdx.push(i)
    }
  }
  return Math.max(...hIdx)
}
// h번 이상 h편 이상이라고 했지, 그게 인용 횟수배열의 요소중 하나라고는 안했음
// [1,2,4,8,8] 이런경우엔 3임
