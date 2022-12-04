function solution(babbling) {
  const words = ['aya', 'ye', 'woo', 'ma']

  const result = babbling.filter(bab => {
    words.forEach((word, idx) => {
      bab = bab.replaceAll(word, idx)
    })
    const stack = []
    bab.split('').forEach(letter => {
      const isInteger = Number.isInteger(Number(letter))
      if (isInteger && stack[stack.length - 1] !== letter) {
        stack.push(letter)
      }
    })
    return stack.length === bab.length
  }).length

  return result
}
