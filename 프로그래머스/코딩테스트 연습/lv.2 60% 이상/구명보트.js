function solution(p, limit) {
  p.sort((a, b) => b - a)
  let count = 0
  let l = 0
  let r = p.length - 1

  while (l < r) {
    let sum = p[l] + p[r]
    if (sum <= limit) {
      r--
    }
    count++
    l++
  }
  if (l === r) count++

  return count
}

// 최대 2명, 무게 제한
