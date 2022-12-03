function solution(food) {
  const result = food.map((count, idx) => {
    if (!idx) return

    if (count % 2) {
      return String(idx).repeat((count - 1) / 2)
    }

    return String(idx).repeat(count / 2)
  })

  return result.join('') + '0' + result.reverse().join('')
}
