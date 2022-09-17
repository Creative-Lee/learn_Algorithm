function solution(dart) {
  let roundScore = {
    1: 0,
    2: 0,
    3: 0,
  }
  let bonus = {
    S: 1,
    D: 2,
    T: 3,
  }
  let option = {
    '*': 2,
    '#': -1,
  }

  for (let i = 1; i <= 3; i++) {
    let score = dart[0]
    dart = dart.substring(1)
    if (dart[0] === '0') {
      score += '0'
      dart = dart.substring(1)
    }

    let calcBonus = (+score) ** bonus[dart[0]]
    roundScore[i] = calcBonus
    dart = dart.substring(1)

    if (dart[0] === '*' || dart[0] === '#') {
      roundScore[i] *= option[dart[0]]
      if (i !== 1 && dart[0] === '*') {
        roundScore[i - 1] *= 2
      }
      dart = dart.substring(1)
    }
  }

  return roundScore[1] + roundScore[2] + roundScore[3]
}
