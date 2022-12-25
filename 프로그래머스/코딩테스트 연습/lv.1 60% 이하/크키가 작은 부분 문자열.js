function solution(t, p) {
  let result = 0
  const lastIndex = t.length - (p.length - 1)

  for (let i = 0; i < lastIndex; i++) {
    const substring = t.substring(i, i + p.length)

    if (Number(substring) <= Number(p)) {
      result += 1
    }
  }

  return result
}
