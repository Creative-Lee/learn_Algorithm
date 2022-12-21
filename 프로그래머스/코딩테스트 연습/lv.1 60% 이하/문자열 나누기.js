function solution(s, count = 0) {
  if (!s) return count

  const length = s.length
  let x = 1
  let other = 0

  for (let i = 1; i < s.length; i++) {
    if (s[0] === s[i]) x += 1

    if (s[0] !== s[i]) other += 1

    if (x === other) {
      s = s.slice(i + 1)
      count += 1
      break
    }
  }

  if (length === s.length) {
    return (count += 1)
  }

  return solution(s, count)
}
