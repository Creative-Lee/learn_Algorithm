function solution(arr) {
  arr.sort((a, b) => b - a)

  const LCM = (a, b) => {
    let mulA = a
    let mulB = b
    while (true) {
      if (mulA > mulB) {
        mulB += b
        continue
      }
      if (mulA < mulB) {
        mulA += a
        continue
      }
      break
    }
    return mulA
  }

  while (arr.length !== 1) {
    let lcm = LCM(arr[arr.length - 2], arr[arr.length - 1])
    arr.pop()
    arr.pop()
    arr.push(lcm)
  }
  return arr[0]
}
