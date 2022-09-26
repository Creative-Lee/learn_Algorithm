function solution(p, l) {
  p = p.map((e, idx) => [idx, e])
  let complete = []

  while (p.length !== 0) {
    let shifted = p.shift()
    if (p.some((e) => e[1] > shifted[1])) {
      p.push(shifted)
    } else {
      complete.push(shifted)
    }
  }
  return complete.findIndex((e) => e[0] === l) + 1
}
// arr에 idx,p의 요소 형식으로 저장
// p.shift 한 값 보다 큰값이 있나 확인  있으면 그대로 push
// 없으면 완료 배열에 push
// p배열의 length가 0이 될때까지 반복
