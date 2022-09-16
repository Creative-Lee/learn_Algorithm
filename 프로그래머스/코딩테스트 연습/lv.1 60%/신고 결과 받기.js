function solution(ids, repo, k) {
  let reports = [...new Set(repo)] //중복 신고 제거
  let map = new Map()

  for (let report of reports) {
    let [reporter, banTarget] = report.split(' ')

    if (map.has(banTarget)) {
      map.set(banTarget, map.get(banTarget) + ` ${reporter}`)
    } else {
      map.set(banTarget, reporter)
    }
  }

  let reporter = [...map.values()].map((str) => {
    if (str.includes(' ')) {
      return str.split(' ')
    } else {
      return [str]
    }
  })

  let mailCount = new Map()
  ids.forEach((id) => mailCount.set(id, 0))

  reporter.forEach((arr) => {
    if (arr.length >= k) {
      arr.map((reporterId) => mailCount.set(reporterId, mailCount.get(reporterId) + 1))
    }
  })

  return [...mailCount.values()]
}
