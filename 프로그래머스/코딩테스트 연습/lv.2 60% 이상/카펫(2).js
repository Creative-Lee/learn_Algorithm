function solution(brown, yellow) {
  let sum = brown + yellow

  let x = Math.ceil(Math.sqrt(sum))

  for (let i = x; i <= sum; i++) {
    if (sum % i !== 0) continue
    let y = sum / i

    if ((y - 2) * (i - 2) === yellow) {
      return [i, y]
    }
  }
}
