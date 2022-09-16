function solution(dart) {
  let point = {
    round1: 0,
    round2: 0,
    round3: 0,
  }
  let bonus = {
    S: 1,
    D: 2,
    T: 3,
  }
  let option = {
    '#': -1,
    '*': 2,
  }

  for (let i = 1; i <= 3; i++) {
    let curRoundStr
    if (dart[0] === '1' && dart[1] === '0') {
      // 점수가 10점인 케이스
      if (dart[3] === '#' || dart[3] === '*') {
        // 옵션 유무 확인
        curRoundStr = dart.substring(0, 4)
        point[`round${i}`] = 10 ** bonus[`${curRoundStr[2]}`] * option[`${curRoundStr[3]}`]
        if (i !== 1) {
          if (curRoundStr[3] === '*') {
            point[`round${i - 1}`] = point[`round${i - 1}`] * option[`${curRoundStr[3]}`]
          }
        }
      } else {
        curRoundStr = dart.substring(0, 3)
        point[`round${i}`] = 10 ** bonus[`${curRoundStr[2]}`]
      }
      dart = dart.substring(curRoundStr.length) // 다음 라운드를 위해 dart 수정
      continue
    }

    if (dart[2] === '#' || dart[2] === '*') {
      // 점수가 0~9점인 케이스, 옵션 유무 확인
      curRoundStr = dart.substring(0, 3)
      point[`round${i}`] =
        (+curRoundStr[0]) ** bonus[`${curRoundStr[1]}`] * option[`${curRoundStr[2]}`]
      if (i !== 1) {
        if (curRoundStr[2] === '*') {
          point[`round${i - 1}`] = point[`round${i - 1}`] * option[`${curRoundStr[2]}`]
        }
      }
    } else {
      curRoundStr = dart.substring(0, 2)
      point[`round${i}`] = (+curRoundStr[0]) ** bonus[`${curRoundStr[1]}`]
    }
    dart = dart.substring(curRoundStr.length) // 다음 라운드를 위해 dart 수정
  }
  return point.round1 + point.round2 + point.round3
}
