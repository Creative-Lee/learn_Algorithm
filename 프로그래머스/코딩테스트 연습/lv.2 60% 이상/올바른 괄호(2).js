function solution(s) {
  const stack = []

  for (const bracket of s) {
    if (bracket === '(') {
      stack.push(bracket)
      continue
    }
    if (stack[stack.length - 1] === '(') {
      stack.pop()
      continue
    }

    return false
  }

  return stack.length === 0
}
