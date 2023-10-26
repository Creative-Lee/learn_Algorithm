function solution(s) {
  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (stack.at(-1) === s[i]) {
      stack.pop()
      continue
    }

    stack.push(s[i])
  }

  if (stack.length > 0) return 0

  return 1
}

// 비어있으면 넣고
// 같은 문자열이면 빼고,
// 다른 문자열이면 탈락
// 남아있어도 탈락
