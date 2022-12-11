function solution(survey, choices) {
  const types = ['RT', 'CF', 'JM', 'AN']

  const scoreList = {}
  types.forEach(([first, second]) => {
    scoreList[first] = 0
    scoreList[second] = 0
  })

  survey.forEach((question, idx) => {
    const [disAgree, agree] = question.split('')
    const choice = choices[idx]
    const score = Math.abs(choice - 4)

    if (choice < 4) {
      scoreList[disAgree] += score
      return
    }

    scoreList[agree] += score
  })

  return types
    .map(type => {
      const [firstType, secondType] = type.split('')

      if (scoreList[firstType] >= scoreList[secondType]) {
        return firstType
      }

      return secondType
    })
    .join('')
}
// 각 점수 구해서 합산 - 비교 - 선택
