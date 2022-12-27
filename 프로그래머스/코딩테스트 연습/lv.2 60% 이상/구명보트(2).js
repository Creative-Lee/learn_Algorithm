function solution(p, limit) {
  p.sort((a, b) => a - b)

  let skinnyIdx = 0
  let fatIdx = p.length - 1
  let count = 0

  while (skinnyIdx <= fatIdx) {
    const weightSum = p[skinnyIdx] + p[fatIdx]

    if (weightSum > limit) {
      fatIdx -= 1
      count += 1
      continue
    }

    skinnyIdx += 1
    fatIdx -= 1
    count += 1
  }

  return count
}
