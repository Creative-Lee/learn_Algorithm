function solution(str1, str2) {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  let arr1 = []
  let arr2 = []

  for (let i = 0; i < str1.length - 1; i++) {
    let slice1 = str1.slice(i, i + 2).split('')

    if (slice1.length === 2) {
      if (slice1.filter((e) => 97 <= e.charCodeAt() && e.charCodeAt() <= 122).length === 2) {
        arr1.push(slice1.join(''))
      }
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    let slice2 = str2.slice(i, i + 2).split('')
    if (slice2.length === 2) {
      if (slice2.filter((e) => 97 <= e.charCodeAt() && e.charCodeAt() <= 122).length === 2) {
        arr2.push(slice2.join(''))
      }
    }
  }

  if (arr1.length === 0 && arr2.length === 0) return 65536

  let union = 0
  let intersection = 0

  let set = new Set([...arr1, ...arr2])

  set.forEach((e) => {
    let dup1 = arr1.filter((e1) => e1 === e).length
    let dup2 = arr2.filter((e2) => e2 === e).length

    union += Math.max(dup1, dup2)
    intersection += Math.min(dup1, dup2)
  })

  return Math.floor((intersection / union) * 65536)
}
