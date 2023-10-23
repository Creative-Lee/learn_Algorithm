const removeZero = str => {
  const _str = [...str].filter(s => s !== '0').join('')
  const count = str.length - _str.length

  return [_str, count]
}

const toBinary = str => {
  return Number(str.length).toString(2)
}

function solution(x) {
  let tranceCount = 0
  let removeCount = 0

  while (x !== '1') {
    const [a, count] = removeZero(x)
    const b = toBinary(a)

    tranceCount += 1
    removeCount += count
    x = b
  }

  return [tranceCount, removeCount]
}
