function solution(park, routes) {
  const move = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  }

  const map = Array.from(Array(park.length), (_, idx) => [...park[idx]])
  let dogX = park.findIndex(load => load.includes('S'))
  let dogY = park[dogX].indexOf('S')

  routes.forEach(route => {
    const [direction, step] = route.split(' ')
    const [moveX, moveY] = move[direction]
    let [testDogX, testDogY] = [dogX, dogY]

    const moveable = new Array(Number(step)).fill().every(() => {
      const [afterMoveDogX, afterMoveDogY] = [testDogX + moveX, testDogY + moveY]

      if (map[afterMoveDogX]?.[afterMoveDogY] === undefined) return false
      if (map[afterMoveDogX][afterMoveDogY] === 'X') return false

      testDogX = afterMoveDogX
      testDogY = afterMoveDogY
      return true
    })

    if (moveable) {
      dogX += moveX * step
      dogY += moveY * step
    }
  })

  return [dogX, dogY]
}
