function solution(s) {
  const stack = []

  for (let str of s) {
    if (stack[stack.length - 1] === str) {
      stack.pop()
      continue
    }

    stack.push(str)
  }

  return stack.length ? 0 : 1
}
