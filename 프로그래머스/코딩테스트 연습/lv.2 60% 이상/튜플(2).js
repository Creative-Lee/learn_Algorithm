function solution(s) {
  s = s.slice(2, -2)
  let arr = s.split('},{')
  arr = arr.map((str) => str.split(',').map((e) => +e))
  arr.sort((a, b) => a.length - b.length)

  let set = new Set()
  arr.map((t) => t.forEach((e) => set.add(e)))

  return [...set]
}
