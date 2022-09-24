function solution(n, left, right) {
  let result = []
  for (let i = left; i <= right; i++) {
    result.push(Math.max(Math.floor(i / n), i % n) + 1)
  }
  return result
}

// 좌표 (row,col)의 값은
// 해당 좌표를 나타내는 row,col 값중 큰 값
// 패던 대로 그대로 구현
// ex) [0,0] [0,1] [0,2] 좌표의 각 값은 1,2,3 최대값 + 1
