function solution(n, lost, reserve) {
  let count = new Array(n).fill(1)
  lost.forEach((e) => (count[e - 1] -= 1))
  reserve.forEach((e) => (count[e - 1] += 1))

  for (let i = 0; i < n; i++) {
    if (count[i] === 2 && count[i - 1] === 0) {
      count[i] -= 1
      count[i - 1] += 1
    }
    if (count[i] === 2 && count[i + 1] === 0) {
      count[i] -= 1
      count[i + 1] += 1
    }
  }
  return count.filter((e) => e > 0).length
}
