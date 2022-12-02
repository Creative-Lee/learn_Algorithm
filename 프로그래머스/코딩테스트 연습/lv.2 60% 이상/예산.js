function solution(d, budget) {
  d = d.sort((a, b) => a - b)
  let count = 0

  for (let amount of d) {
    if (budget - amount >= 0) {
      budget -= amount
      count += 1
      continue
    }
    break
  }

  return count
}
