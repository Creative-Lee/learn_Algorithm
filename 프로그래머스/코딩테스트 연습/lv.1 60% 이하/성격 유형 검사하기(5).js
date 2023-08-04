function solution(survey, choices) {
  const types = ['RT', 'CF', 'JM', 'AN']

  const MBTIScore = {}
  let MBTIResult = ''

  types.forEach(type => {
    MBTIScore[type[0]] = 0
    MBTIScore[type[1]] = 0
  })

  survey.forEach((question, idx) => {
    const negative = question[0]
    const positive = question[1]

    const answer = choices[idx]
    const score = answer - 4

    if (score === 0) return
    if (score < 0) {
      MBTIScore[negative] += Math.abs(score)
      return
    }

    MBTIScore[positive] += score
  })

  types.forEach(type => {
    const negative = type[0]
    const positive = type[1]

    const isPositive = MBTIScore[negative] < MBTIScore[positive]
    if (isPositive) {
      MBTIResult += positive
    } else {
      MBTIResult += negative
    }
  })

  return MBTIResult
}

// survey를 돌면서 0번 1번 해서 선택지 나눔
// choices 돌면서 점수 계산 초이스에 -4 하면 점수임 ex) 5 === 1점 3 === -1점
// 음수면 왼쪽 유형에 양수로 바꿔서 점수 추가
// 양수면 오른쪽 유형에 점수 추가
// 맨 마지막에 점수 취합해서
// 랭킹 두면 될듯
