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
  const clone = [...sArr]
  let isOk = true

  sArr.forEach(s => {
    if (!isOk) return

    const top = stack.at(-1)
    if (s === '}') {
      if (top === '{') {
        stack.pop()
        return
      }
      isOk = false
      return
    }
    if (s === ')') {
      if (top === '(') {
        stack.pop()
        return
      }
      isOk = false
      return
    }
    if (s === ']') {
      if (top === '[') {
        stack.pop()
        return
      }
      isOk = false
      return
    }

    stack.push(s)
  })

  if (stack.length) return false

  return isOk
}
