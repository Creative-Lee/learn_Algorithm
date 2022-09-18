function solution(arr, com) {
  let result = []
  for (let command of com) {
    let clone = [...arr]
    let [i, j, k] = command

    result.push(clone.slice(i - 1, j).sort((a, b) => a - b)[k - 1])
  }
  return result
}
