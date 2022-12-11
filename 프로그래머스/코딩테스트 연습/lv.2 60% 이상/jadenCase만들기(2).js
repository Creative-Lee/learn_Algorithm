function solution(s) {
  const words = s.split(' ')

  return words
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(' ')
}
