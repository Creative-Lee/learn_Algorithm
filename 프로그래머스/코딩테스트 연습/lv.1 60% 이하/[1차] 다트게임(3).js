function solution(dart) {
  const scores = []
  const bonusMap = { S: 1, D: 2, T: 3 }

  for (let i = 0; i < dart.length; i++) {
    console.log(scores)
    if (dart[i] === '1' && dart[i + 1] === '0') {
      scores.push(10)
      i++
      continue
    }

    if (['S', 'D', 'T'].includes(dart[i])) {
      const score = scores.pop()
      scores.push(score ** bonusMap[dart[i]])
      continue
    }

    if (dart[i] === '#') {
      const score = scores.pop()
      scores.push(score * -1)
      continue
    }

    if (dart[i] === '*') {
      if (scores.length === 1) {
        const score = scores.pop()
        scores.push(score * 2)
        continue
      }

      const score = scores.pop()
      const beforeScore = scores.pop()
      scores.push(beforeScore * 2)
      scores.push(score * 2)

      continue
    }

    scores.push(Number(dart[i]))
  }

  return scores.reduce((a, c) => a + c, 0)
}
