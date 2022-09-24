function solution(s) {
  s = s.slice(2, -2)
  let arr = s.split('},{')
  arr = arr.map((e) => e.split(',').map((e) => +e))
  arr.sort((a, b) => a.length - b.length)

  let result = []
  let set = new Set()

  for (let i = 0; i < arr.length; i++) {
    arr[i].map((e) => set.add(e))
  }
  return [...set]
}
