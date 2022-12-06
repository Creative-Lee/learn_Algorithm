function solution(number, limit, power) {
  const nums = Array.from({ length: number }, (_, idx) => idx + 1)

  const divisorCounts = nums.map((num) => {
    const count = new Set()

    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        count.add(i)
        count.add(num / i)
      }
    }

    return count.size
  })

  return divisorCounts.reduce((result, divisorCounts) => {
    if (divisorCounts <= limit) {
      return result + divisorCounts
    }
    return result + power
  }, 0)
}
