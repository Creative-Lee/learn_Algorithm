function solution(players, callings) {
  const _players = [...players]
  const rank = {}
  _players.forEach((player, idx) => (rank[player] = idx))

  callings.forEach(callName => {
    const winnerCurrentRank = rank[callName]
    const winner = _players[winnerCurrentRank]
    const loser = _players[winnerCurrentRank - 1]

    _players[winnerCurrentRank] = loser
    _players[winnerCurrentRank - 1] = winner

    rank[winner] = rank[winner] - 1
    rank[loser] = rank[loser] + 1
  })

  return _players
}
