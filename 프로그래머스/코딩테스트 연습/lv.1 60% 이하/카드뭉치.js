function solution(cards1, cards2, goal) {
  cards1.reverse()
  cards2.reverse()
  goal.reverse()

  const iterCount = goal.length

  for (let i = 0; i < iterCount; i++) {
    const targetWord = goal.pop()

    if (cards1.at(-1) === targetWord) {
      cards1.pop()
      continue
    }

    if (cards2.at(-1) === targetWord) {
      cards2.pop()
      continue
    }

    return 'No'
  }

  return 'Yes'
}
