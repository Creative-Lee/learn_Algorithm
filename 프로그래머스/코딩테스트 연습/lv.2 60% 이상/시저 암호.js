function solution(s, n) {
  const upperMin = 65
  const upperMax = 90
  const lowerMin = 97
  const lowerMax = 122

  return s
    .split('')
    .map(letter => {
      if (letter === ' ') return ' '

      const charCode = letter.charCodeAt()
      const newCharCode = charCode + n
      if (charCode <= upperMax) {
        if (upperMax < newCharCode) {
          return String.fromCharCode(newCharCode - 26)
        }
        return String.fromCharCode(newCharCode)
      }
      if (lowerMin <= charCode) {
        if (lowerMax < newCharCode) {
          return String.fromCharCode(newCharCode - 26)
        }
        return String.fromCharCode(newCharCode)
      }
    })
    .join('')
}
