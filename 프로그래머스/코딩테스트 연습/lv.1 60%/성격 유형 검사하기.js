function solution(survey, choices) {
  let map = new Map()
  let count = [3, 2, 1, 0, 1, 2, 3]

  for (let i = 0; i < survey.length; i++) {
    let [dis, agree] = survey[i].split('')
    if (choices[i] - 1 < 3) {
      // 0,1,2면 dis 로 점수 저장
      if (map.has(dis)) {
        map.set(dis, map.get(dis) + count[choices[i] - 1])
      } else {
        map.set(dis, count[choices[i] - 1])
      }
    } else if (choices[i] - 1 > 3) {
      if (map.has(agree)) {
        map.set(agree, map.get(agree) + count[choices[i] - 1])
      } else {
        map.set(agree, count[choices[i] - 1])
      }
    } else {
      continue
    }
  }
  let result = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  }

  for (let key in result) {
    if (map.has(key)) {
      result[key] = map.get(key)
    }
  }

  let answer = ''
  if (result.R > result.T) answer += 'R'
  else if (result.R < result.T) answer += 'T'
  else answer += 'R'

  if (result.C > result.F) answer += 'C'
  else if (result.C < result.F) answer += 'F'
  else answer += 'C'

  if (result.J > result.M) answer += 'J'
  else if (result.J < result.M) answer += 'M'
  else answer += 'J'

  if (result.A > result.N) answer += 'A'
  else if (result.A < result.N) answer += 'N'
  else answer += 'A'

  return answer
}
