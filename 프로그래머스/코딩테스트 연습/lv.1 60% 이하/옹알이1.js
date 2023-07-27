function solution(words) {
  const babbles = ['aya', 'ye', 'woo', 'ma']
  const _words = [...words]

  const result = words.filter(word => {
    babbles.forEach(babble => {
      word = word.replace(babble, ' ')
    })

    return word.trim() === ''
  }).length

  return result
}
