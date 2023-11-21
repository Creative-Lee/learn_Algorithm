function solution(numbers, target) {
  let count = 0

  const calc = (sum, idx) => {
    if (idx === numbers.length) {
      if (sum === target) count += 1

      return
    }

    calc(sum + numbers[idx], idx + 1)
    calc(sum - numbers[idx], idx + 1)
  }

  calc(0, 0)

  return count
}
