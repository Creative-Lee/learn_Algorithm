function solution(food) {
  const result = food.map((count, idx) => {
    const target = String(idx)

    if (!idx) return

    if (count % 2) {
      return target.repeat((count - 1) / 2)
    }

    return target.repeat(count / 2)
  })

  return result.join('') + '0' + result.reverse().join('')
}
