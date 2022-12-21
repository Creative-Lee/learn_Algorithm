function solution(k, score) {
  const mj = []

  return score.reduce((min, s) => {
    mj.push(s)
    mj.sort((a, b) => b - a)

    if (mj.length > k) {
      mj.pop()
    }

    min.push(mj.at(-1))

    return min
  }, [])
}
