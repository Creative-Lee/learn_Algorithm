const solution = (players, callings) => {
  const [rankLog, nameLog] = Object.entries(players).reduce(
    (log, [rank, name]) => {
      log[0][rank] = name
      log[1][name] = rank

      return log
    },
    [{}, {}]
  )

  callings.forEach(winnerName => {
    const winnerBeforeRank = nameLog[winnerName]
    const loserBeforeRank = winnerBeforeRank - 1
    const loserName = rankLog[loserBeforeRank]
    const tempWinnerName = rankLog[winnerBeforeRank]

    nameLog[winnerName] = nameLog[loserName]
    nameLog[loserName] = winnerBeforeRank

    rankLog[winnerBeforeRank] = loserName
    rankLog[loserBeforeRank] = tempWinnerName
  })

  return Object.values(rankLog)
}
