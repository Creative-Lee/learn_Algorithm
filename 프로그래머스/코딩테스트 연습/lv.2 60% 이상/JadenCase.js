function solution(s) {
  let splitted = s.split(' ')

  splitted = splitted.map((word) => {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
  })

  return splitted.join(' ')
}
