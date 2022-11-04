function solution(clothes) {
  let map = new Map()

  for (let cloth of clothes) {
    if (map.has(cloth[1])) {
      map.set(cloth[1], map.get(cloth[1]) + 1)
      continue
    }
    map.set(cloth[1], 1)
  }

  let values = [...map.values()]
  let result = values.reduce((a, b) => a * (b + 1), 1) - 1 // 둘다 착용 안하는 경우의 수 빼줌

  return result
}
2
