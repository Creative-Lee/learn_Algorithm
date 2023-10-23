function solution(nums, hand) {
  const pad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  }

  let l = [3, 0]
  let r = [3, 2]

  return nums
    .map(num => {
      const key = pad[num]
      const leftDistance = getDistance(key, l)
      const rightDistance = getDistance(key, r)

      if ([1, 4, 7].includes(num)) {
        l = key
        return 'L'
      }

      if ([3, 6, 9].includes(num)) {
        r = key
        return 'R'
      }

      if (leftDistance < rightDistance) {
        l = key
        return 'L'
      }
      if (leftDistance > rightDistance) {
        r = key
        return 'R'
      }

      if (hand === 'right') {
        r = key
        return 'R'
      }

      l = key
      return 'L'
    })
    .join('')
}

const getDistance = (cord1, cord2) => {
  const xDis = Math.abs(cord1[0] - cord2[0])
  const yDis = Math.abs(cord1[1] - cord2[1])

  return xDis + yDis
}

// 필요한 정보
// 1. 왼 엄지 좌표
// 2. 오른 엄지 좌표
// 3. 엄지 로그
// 4. 키패드 2차원 배열
//

// 도출 가능한 정보
// 1. 왼 오 거리
// 2. 왼 오 어디가 더 가까운지
// 3. 누른 순서

//30분
