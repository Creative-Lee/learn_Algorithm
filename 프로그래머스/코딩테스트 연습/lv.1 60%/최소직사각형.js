function solution(sizes) {
  let size = sizes
  size = size.map((arr) => arr.sort((a, b) => b - a))

  let w = size.map((arr) => arr[0])
  let h = size.map((arr) => arr[1])

  let maxW = Math.max(...w)
  let maxH = Math.max(...h)

  return maxW * maxH
}
