function solution(k, m, score) {
  let result = 0
  const iterCount = Math.floor(score.length / m)

  score.sort((a, b) => a - b)

  for (let i = 0; i < iterCount; i++) {
    result += score.splice(-m)[0] * m
  }

  return result
}
