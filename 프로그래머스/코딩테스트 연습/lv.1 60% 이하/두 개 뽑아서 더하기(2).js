function solution(num) {
  const result = new Set()
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      result.add(num[i] + num[j])
    }
  }

  return [...result].sort((a, b) => a - b)
}
