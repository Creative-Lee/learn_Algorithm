function solution(n, stages) {
  let result = []

  for (let i = 1; i <= n; i++) {
    let winner = stages.filter((e) => e >= i).length
    let loser = stages.filter((e) => e === i).length
    result.push([loser / winner, i])
  }

  result.sort((a, b) => b[0] - a[0])

  return result.map((e) => e[1])
}
