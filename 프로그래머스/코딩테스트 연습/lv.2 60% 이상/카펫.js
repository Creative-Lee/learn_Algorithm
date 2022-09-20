function solution(brown, yellow) {
  let sum = brown + yellow

  for (let i = Math.ceil(Math.sqrt(sum)); i < sum; i++) {
    if (sum % i === 0) {
      let x = i
      let y = sum / i

      if ((y - 2) * (x - 2) === yellow) {
        return [x, y]
      }
    }
  }
}
