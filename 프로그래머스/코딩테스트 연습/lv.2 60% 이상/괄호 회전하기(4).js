const map = {
  '}': '{',
  ']': '[',
  ')': '(',
}

function solution(s) {
  const sArr = [...s]

  const result = sArr.filter(s => {
    rotate(sArr)

    return check(sArr)
  }).length

  return result
}

const rotate = arr => {
  return arr.push(arr.shift())
}

const check = sArr => {
  const stack = []
  let isOk = true

  sArr.forEach(s => {
    if (!isOk) return

    const stackTop = stack.at(-1)

    if (s === '{' || s === '[' || s === '(') {
      stack.push(s)
      return
    }

    if (stackTop === map[s]) {
      stack.pop()
      return
    }

    isOk = false
  })

  if (stack.length) return false

  return isOk
}
