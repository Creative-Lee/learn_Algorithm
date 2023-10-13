function solution(runners, winners) {
  const map = new Map()

  runners.forEach((runner, idx) => {
    if (!map.has(runner)) {
      map.set(runner, 1)
      return
    }
    map.set(runner, map.get(runner) + 1)
  })

  winners.forEach((winner, idx) => {
    if (!map.has(winners[idx])) {
      map.set(winners[idx], 1)
      return
    }
    map.set(winner, map.get(winner) - 1)
  })

  return [...map.entries()].find(([_, count]) => count === 1)[0]
}
