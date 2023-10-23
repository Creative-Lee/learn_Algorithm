function solution(board, moves) {
  const ok = []
  let popCount = 0

  const n = board.length

  const yAxisStack = []

  for (let i = 0; i < n; i++) {
    const newLine = []

    for (let j = 0; j < n; j++) {
      if (board[j][i] === 0) continue
      newLine.push(board[j][i])
    }
    newLine.reverse()
    yAxisStack.push(newLine)
  }

  moves.forEach(move => {
    const attackLine = yAxisStack[move - 1]
    const doll = attackLine.pop()
    if (doll === undefined) return

    if (ok.at(-1) === doll) {
      ok.pop()
      popCount += 2
      return
    }

    ok.push(doll)
  })

  return popCount
}

// 필요한 정보
// 1. n 개만큼의 스택을 만들어야함.
// 2. 뽑기 성공 스택을 만들어야함.

// 도출 가능한 정보

// 25분
