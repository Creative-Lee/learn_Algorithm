function solution(c) {
  c.sort((a, b) => a - b)

  let hIndex = []
  for (let i = 0; i <= Math.max(...c); i++) {
    if (i <= c.filter((e) => e >= i).length) {
      hIndex.push(i)
    }
  }

  return Math.max(...hIndex)
}
