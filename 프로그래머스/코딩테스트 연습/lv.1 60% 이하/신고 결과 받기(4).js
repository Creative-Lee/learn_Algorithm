function solution(idList, report, k) {
  const messageCountList = {}
  const reportRelationList = {}
  const reportCount = {}

  idList.forEach(id => {
    messageCountList[id] = 0
    reportRelationList[id] = new Set()
    reportCount[id] = 0
  })

  report.forEach(rep => {
    const [good, bad] = rep.split(' ')
    if (reportRelationList[good].has(bad)) return

    reportRelationList[good].add(bad)
    reportCount[bad] += 1
  })

  const banList = Object.entries(reportCount)
    .filter(([id, count]) => count >= k)
    .map(([id, count]) => id)

  const result = idList.map(id => {
    return banList.filter(ban => reportRelationList[id].has(ban)).length
  })

  return result
}

// 내가 필요한 데이터
// 1. 누가 누구를 신고했는지 (1회만 있으면 됨)
// 2. 신고를 당한 횟수 누적 결과

// 위 데이터로 도출할 수 있는 것
// 1. 누가 ban을 당했는지
// 2. 메세지 받을 사람이 누군지

// 25분
