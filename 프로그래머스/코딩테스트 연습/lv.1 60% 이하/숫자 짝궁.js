function solution(X, Y) {
  const result = []
  const x = {}
  X.split('').forEach(number => {
    if (x[number]) {
      x[number] += 1
      return
    }
    x[number] = 1
  })

  Y.split('').forEach(number => {
    if (x[number]) {
      x[number] -= 1
      result.push(number)
    }
  })

  result.sort((a, b) => b - a)

  if (!result.length) return '-1'
  if (result[0] === '0') return '0'
  return result.join('')
}
