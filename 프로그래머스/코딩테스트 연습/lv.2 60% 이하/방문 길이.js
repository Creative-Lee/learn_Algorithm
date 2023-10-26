function solution(dirs) {
  let newStep = 0

  const move = {
    U: [-1, 0],
    D: [1, 0],
    R: [0, 1],
    L: [0, -1],
  }

  const duplicateMap = {
    U: 'D',
    D: 'U',
    L: 'R',
    R: 'L',
  }

  const visitMap = Array.from({ length: 11 }, () => new Array(11).fill().map(() => new Set()))
  const cord = [5, 5]

  dirs.split('').forEach(dir => {
    const [stepX, stepY] = move[dir]
    const [beforeX, beforeY] = cord
    const [afterX, afterY] = [beforeX + stepX, beforeY + stepY]
    const moveable = 0 <= afterX && afterX <= 10 && 0 <= afterY && afterY <= 10

    if (!moveable) return

    if (!visitMap[afterX][afterY].has(duplicateMap[dir])) {
      visitMap[afterX][afterY].add(duplicateMap[dir])
      visitMap[beforeX][beforeY].add(dir)
      newStep += 1
    }

    ;[cord[0], cord[1]] = [afterX, afterY]
  })

  return newStep
}

// 낚시 포인트
// 1. 평면 이동이 아닌, 줄 이동이다.

// 필요한 정보
// 1. 11x11 방문 좌표
// 2. 현재 좌표
// 3. move시 이동량

// 분기
// 오버플로우면 이동 X 카운트 x
// 이동 가능하면 이동 O
// 갔던곳이면 카운트 X

// 이동할 곳에서 현재 있는곳으로 온적이 있으면 갔던 길 -> 이동할 곳에 반대 표식이 있으면 갔던 길
// 없으면 처음 가는 길
// 이동할 곳에 'D' 표시 -> 밑에서 올라온적 있다.
// 내가 지금 있는 곳에 'U' 표시 -> 위로 올라간적 있다.
