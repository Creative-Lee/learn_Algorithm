function solution(babbling) {
  const words = ['aya', 'ye', 'woo', 'ma']

  const markedBabs = babbling.map(bab => {
    words.forEach((word, idx) => {
      bab = bab.replaceAll(word, idx + 1)
    })
    return bab
  })
  // 4가지 발음에 해당하는 문자열을 숫자로 바꿈

  const checkedNumbers = markedBabs.filter(bab => Number.isInteger(Number(bab)))
  // 문자가 있는지 확인 -> 숫자로 변환이 안된 것은 나가리임

  const filteredNumbers = checkedNumbers.filter(num => {
    for (let i = 0; i < num.length; i++) {
      if (num[i] === num[i + 1]) return false
    }

    return true
  })
  // 연속된 숫자가 있는지 확인

  return filteredNumbers.length
}
