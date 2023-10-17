const solution = (n, arr1, arr2) => {
  const a = arr1.map(num => num.toString(2).padStart(n, '0'))
  const b = arr2.map(num => num.toString(2).padStart(n, '0'))

  const map = a.map((cord, idx) => {
    const miniMap = cord.split('')
    const miniMap2 = b[idx].split('')

    return miniMap
      .map((mini, idx2) => {
        return mini === '1' || miniMap2[idx2] === '1' ? '#' : ' '
      })
      .join('')
  })

  return map
}
