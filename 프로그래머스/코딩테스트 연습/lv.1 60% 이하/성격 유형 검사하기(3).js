function solution(survey, choices) {
  let type = ['RT', 'CF', 'JM', 'AN']
  let score = {}

  type.forEach(([a, b]) => {
    score[a] = 0
    score[b] = 0
  })

  for (let i = 0; i < survey.length; i++) {
    let [dis, agree] = survey[i].split('')
    let choice = choices[i]
    score[choice < 4 ? dis : agree] += Math.abs(choice - 4)
  }

  let mbti = ''
  type.forEach(([a, b]) => (mbti += score[a] >= score[b] ? a : b))

  return mbti
}
