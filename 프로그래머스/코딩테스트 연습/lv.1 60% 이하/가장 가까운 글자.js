function solution(str) {
  const result = []
  const index = {}

  for (let i = 0; i < str.length; i++) {
    if (index[str[i]]) {
      index[str[i]].push(i)
      continue
    }

    index[str[i]] = [i]
  }

  for (let i = 0; i < str.length; i++) {
    const indexArr = index[str[i]]
    const currentIdx = indexArr.indexOf(i)

    if (currentIdx) {
      result.push(indexArr[currentIdx] - indexArr[currentIdx - 1])
      continue
    }

    result.push(-1)
  }

  return result
}
