function solution(survey, choices) {
  let mbti = ['RT', 'CF', 'JM', 'AN']
  let result = {}

  mbti.forEach(([a, b]) => {
    result[a] = 0
    result[b] = 0
  })

  for (let i = 0; i < survey.length; i++) {
    let [dis, agree] = survey[i].split('')
    result[choices[i] < 4 ? dis : agree] += Math.abs(choices[i] - 4) // 절댓값은 항상 0,1,2,3
  }

  let answer = mbti.map(([a, b]) => (result[a] >= result[b] ? a : b))

  return answer.join('')
}
