function solution(msg) {
  const dict = new Map()
  const words = []

  Array.from({ length: 26 }, (_, idx) => {
    const code = String.fromCharCode(65 + idx)
    dict.set(code, idx + 1)
    words.push(code)
  })

  const result = []

  while (msg.length !== 0) {
    const longestWord = words.filter(word => msg.startsWith(word)).at(-1)

    result.push(dict.get(longestWord))

    msg = msg.slice(longestWord.length)
    const newWord = longestWord + msg[0]

    words.push(newWord)
    dict.set(newWord, dict.size + 1)
  }

  return result
}

// 1. 사전
// 2. 사전에서 msg 해당하는 가장 긴 문자열 찾음 - startswith?
// 3.
