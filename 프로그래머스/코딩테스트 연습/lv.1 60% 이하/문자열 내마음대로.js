function solution(strings, n) {
  strings = strings.sort((a, b) => a.localeCompare(b))
  let arr = strings.sort((a, b) => a[n].localeCompare(b[n]))

  return arr
}
