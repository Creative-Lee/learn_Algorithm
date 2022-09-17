function solution(board, moves) {
  let poped = 0
  let stack = []

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1]) {
        if (stack[stack.length - 1] === board[j][moves[i] - 1]) {
          stack.pop()
          poped += 2
          board[j][moves[i] - 1] = 0
          break
        }
        stack.push(board[j][moves[i] - 1])
        board[j][moves[i] - 1] = 0
        break
      }
    }
  }
  return poped
}
