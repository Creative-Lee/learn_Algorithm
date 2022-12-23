function solution(participant, completion) {
  let map = new Map()
  for (let p of participant) {
    map.set(p, map.get(p) + 1 || 1)
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
