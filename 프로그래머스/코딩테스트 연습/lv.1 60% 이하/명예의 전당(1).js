function solution(k, score) {
  const stack = []

  return score.reduce((answer, s) => {
    stack.push(s)
    stack.sort((a, b) => b - a)

    if (stack.length > k) {
      stack.pop()
    }

    answer.push(stack.at(-1))
    return answer
  }, [])
}
