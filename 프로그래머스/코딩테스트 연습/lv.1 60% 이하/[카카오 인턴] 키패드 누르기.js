function solution(nums, hand) {
  let result = ''

  let leftPoint = [3, 0]
  let rightPoint = [3, 2]

  let targetXY = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    0: [3, 1],
  }

  const getDistance = (n) => {
    let [targetX, targetY] = targetXY[n]
    let [leftX, leftY] = leftPoint
    let [rightX, rightY] = rightPoint
    let leftDis = Math.abs(leftX - targetX) + Math.abs(leftY - targetY)
    let rightDis = Math.abs(rightX - targetX) + Math.abs(rightY - targetY)
    let short = leftDis < rightDis ? 'L' : leftDis > rightDis ? 'R' : 'S'
    return short
  }

  for (let num of nums) {
    if (num === 1 || num === 4 || num === 7) {
      leftPoint = targetXY[num]
      result += 'L'
      continue
    }
    if (num === 3 || num === 6 || num === 9) {
      rightPoint = targetXY[num]
      result += 'R'
      continue
    }
    if (num === 2 || num === 5 || num === 8 || num === 0) {
      let short = getDistance(num)
      if (short === 'L') {
        leftPoint = targetXY[num]
        result += 'L'
      } else if (short === 'R') {
        rightPoint = targetXY[num]
        result += 'R'
      } else {
        if (hand === 'left') {
          leftPoint = targetXY[num]
          result += 'L'
        } else {
          rightPoint = targetXY[num]
          result += 'R'
        }
      }
    }
  }
  return result
}
