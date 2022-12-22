function solution(x) {
  let changeCount = 0
  let deleteCount = 0

  while (x !== '1') {
    const step1StrLength = x.split('').reduce((str, cur) => {
      if (cur === '0') {
        deleteCount++
        return str
      }

      return (str += cur)
    }, '').length

    const newX = step1StrLength.toString(2)
    x = newX
    changeCount++
  }

  return [changeCount, deleteCount]
}
