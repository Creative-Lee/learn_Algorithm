function solution(n) {
  const snail = Array.from({ length: n }, (_, idx) => new Array(idx + 1).fill(0))

  const lastNum = (n * (n + 1)) / 2

  let [x, y, num] = [0, 0, 1]

  while (num <= lastNum) {
    while (x < n && !snail[x][y]) {
      snail[x][y] = num
      num += 1
      x += 1
    }

    x -= 1
    y += 1

    while (y < n && !snail[x][y]) {
      snail[x][y] = num
      num += 1
      y += 1
    }

    x -= 1
    y -= 2

    while (x > 0 && y > 0 && !snail[x][y]) {
      snail[x][y] = num
      num += 1
      x -= 1
      y -= 1
    }

    x += 2
    y += 1
  }

  return snail.flat()
}
