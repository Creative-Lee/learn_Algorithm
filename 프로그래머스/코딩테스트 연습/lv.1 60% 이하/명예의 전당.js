function solution(k, scores) {
  const mj = []

  return scores.reduce((minScores, score) => {
    mj.push(score)
    mj.sort((a, b) => b - a)

    if (k < mj.length) {
      mj.pop()
    }

    minScores.push(mj.at(-1))

    return minScores
  }, [])
}
