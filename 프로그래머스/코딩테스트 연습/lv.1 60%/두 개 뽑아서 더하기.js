function solution(num) {
  let result
  let set = new Set()

  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      set.add(num[i] + num[j])
    }
  }
  result = [...set]
  return result.sort((a, b) => a - b)
}
