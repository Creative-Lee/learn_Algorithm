const solution = (n, arr1, arr2) => {
  const binaries = arr1.map((num, idx) => num | arr2[idx])

  return binaries.map(num => {
    const binary = num.toString(2).padStart(n, '0')
    return [...binary].map(b => (b === '0' ? ' ' : '#')).join('')
  })
}
