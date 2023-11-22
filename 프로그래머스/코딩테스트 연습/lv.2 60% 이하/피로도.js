function solution(k, dungeons) {
  const permutations = []
  const visited = new Array(dungeons.length).fill(false)

  const solve = arr => {
    if (arr.length === dungeons.length) {
      permutations.push([...arr])
      return
    }

    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i]) {수
        visited[i] = true
        const dungeon = dungeons[i]
        arr.push(dungeon)
        solve(arr)
        arr.pop()
        visited[i] = false
      }
    }
  }

  solve([])

  const counts = permutations.map(per => {
    let count = 0
    let _k = k

    per.forEach(([min, comsume]) => {
      if (_k >= min) {
        _k -= comsume
        count += 1
      }
    })

    return count
  })

  return Math.max(...counts)
}
