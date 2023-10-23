function solution(n, words) {
  const wordsSet = new Set([words[0]])

  let round = 0
  let loserNum = 0

  for (let i = 0; i < words.length; i++) {
    if (i % n === 0) {
      round += 1
    }
    if (i === 0) continue

    const before = words[i - 1].at(-1)
    const current = words[i][0]
    const playerNum = (i % n) + 1

    if (wordsSet.has(words[i]) || current !== before) {
      loserNum = playerNum
      break
    }

    wordsSet.add(words[i])
  }

  if (loserNum === 0) {
    return [0, 0]
  }

  return [loserNum, round]
}

// 필요한 데이터
// 1. 현재 턴
// 2. 현재 플레이어
// 3. 여태 나온 단어 넣을 Set
// 4. 이전 단어의 끝
// 5. 현재 단어의 시작

// 구해야하는 것
// 1. 가장 먼저 탈락한 사람
// 2. 그 사람이 탈락한 턴
// 3. 없으면 [0, 0]
