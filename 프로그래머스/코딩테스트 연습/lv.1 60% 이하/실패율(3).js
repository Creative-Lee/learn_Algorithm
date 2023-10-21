function solution(n, stages) {
  const result = []

  new Array(n).fill().forEach((_, idx) => {
    const challenger = stages.filter(stage => stage >= idx + 1).length
    const loser = stages.filter(stage => stage === idx + 1).length

    result.push([loser / challenger, idx + 1])
  })

  result.sort(([loserPer1], [loserPer2]) => loserPer2 - loserPer1)

  return result.map(([per, stage]) => stage)
}

// 필요한 정보
// 1. 해당 레벨 보다 높은 같거나 높은 레벨 수

// 실패율 높은 순 내림차순
// 도달 + 아직 클리어하지 못한 수 / 도달한 플레이어 수
// 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
// 도달 유저 x 실패율 0

// 30분
