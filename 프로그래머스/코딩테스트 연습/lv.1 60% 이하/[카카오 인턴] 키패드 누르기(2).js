function solution(nums, hand) {
  let H = hand.toUpperCase()[0]
  let coordinate = {
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
  let curLeft = [3, 0]
  let curRight = [3, 2]
  let result = ''

  for (let num of nums) {
    if (num === 1 || num === 4 || num === 7) {
      curLeft = coordinate[num]
      result += 'L'
      continue
    }
    if (num === 3 || num === 6 || num === 9) {
      curRight = coordinate[num]
      result += 'R'
      continue
    }
    let [targetX, targetY] = coordinate[num]
    let [leftX, leftY] = curLeft
    let [rightX, rightY] = curRight
    let leftDistance = Math.abs(leftX - targetX) + Math.abs(leftY - targetY)
    let rightDistance = Math.abs(rightX - targetX) + Math.abs(rightY - targetY)
    if (leftDistance === rightDistance) {
      if (H === 'L') {
        curLeft = coordinate[num]
        result += 'L'
      } else {
        curRight = coordinate[num]
        result += 'R'
      }
    } else if (leftDistance > rightDistance) {
      curRight = coordinate[num]
      result += 'R'
    } else {
      curLeft = coordinate[num]
      result += 'L'
    }
  }
  return result
}
