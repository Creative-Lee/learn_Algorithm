const solution = brackets => {
  const clone = [...brackets]

  return new Array(brackets.length).fill().filter(bracket => {
    clone.push(clone.shift())
    return isCorrectBrackets(clone)
  }).length
}

const isCorrectBrackets = brackets => {
  const bracketMap = {
    '}': '{',
    ')': '(',
    ']': '[',
  }

  const stack = []
  let isCorrect = true

  brackets.forEach(bracket => {
    if (['[', '{', '('].includes(bracket)) {
      stack.push(bracket)
      return
    }

    const last = stack.at(-1)
    if (bracketMap[bracket] !== last) {
      isCorrect = false
      return
    }

    stack.pop()
  })

  if (stack.length > 0) isCorrect = false

  return isCorrect
}

// 필요한 데이터
// 1. 정상인지 판별하는 함수
//      a. 스택

// 도출 데이터
// 1.
