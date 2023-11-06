function solution(m, n, board) {
  const boardMap = board.map(row => row.split(''))

  let count = 0

  while (checkPopCords(boardMap).length !== 0) {
    const popCords = checkPopCords(boardMap)
    count += popCords.length
    markPopSign(popCords, boardMap)
    moveBlock(boardMap)
  }

  return count
}

const checkPopCords = board => {
  const cordsSet = new Set()

  for (let i = 0; i < board.length - 1; i++) {
    for (let j = 0; j < board[0].length - 1; j++) {
      const currentBlock = board[i][j]
      const blocks = [board[i][j + 1], board[i + 1][j], board[i + 1][j + 1]]
      const cords = [`${i} ${j}`, `${i} ${j + 1}`, `${i + 1} ${j}`, `${i + 1} ${j + 1}`]

      if (blocks.every(block => block === currentBlock && block !== '#')) {
        cords.forEach(cord => cordsSet.add(cord))
      }
    }
  }

  return [...cordsSet]
}

const moveBlock = board => {
  for (let i = 0; i < board[0].length; i++) {
    let col = ''
    for (let j = 0; j < board.length; j++) {
      col += board[j][i]
    }
    col = col.replaceAll('#', '')
    col = col.padStart(board.length, '#')

    for (let k = 0; k < board.length; k++) {
      board[k][i] = col[k]
    }
  }
}

const markPopSign = (popCords, board) => {
  popCords.forEach(cord => {
    const [x, y] = cord.split(' ')
    board[x][y] = '#'
  })
}

// 1. 현재 상태의 모든 맵을 돌면서 pop 가능 좌표 기록 - 중복 생기지 않도록 set에 문자열로 기록
// 2. pop 가능 좌표수만큼 popCount 증가 + pop 좌표 블럭을 pop 표시 문자열로 대체?
// 3. 빈공간을 채우기
// 4. pop 좌표가 없을 때 까지 반복
