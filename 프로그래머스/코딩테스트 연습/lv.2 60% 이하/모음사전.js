function solution(targetWord) {
  const source = ['A', 'E', 'I', 'O', 'U']
  const map = new Map()
  let idx = 0

  const solve = str => {
    if (str.length === 5) return

    for (let i = 0; i < source.length; i++) {
      str += source[i]
      map.set(str, ++idx)
      solve(str)
      str = str.slice(0, -1)
    }
  }

  solve('')

  return map.get(targetWord)
}
