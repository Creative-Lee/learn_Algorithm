function solution(s) {
  return s
    .split(' ')
    .map(word => {
      return word.split('').map(transform).join('')
    })
    .join(' ')
}

const transform = (eachLetter, idx) => {
  if (idx % 2 === 0) {
    return eachLetter.toUpperCase()
  }

  return eachLetter.toLowerCase()
}
