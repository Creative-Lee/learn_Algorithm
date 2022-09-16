function solution(participant, completion) {
  let map = new Map()
  for (let p of participant) {
    if (map.has(p)) {
      map.set(p, map.get(p) + 1)
    } else {
      map.set(p, 1)
    }
  }
  completion.forEach((e) => {
    if (map.has(e)) {
      if (map.get(e) > 1) {
        map.set(e, map.get(e) - 1)
      } else {
        map.delete(e)
      }
    }
  })
  return [...map.keys()][0]
}
