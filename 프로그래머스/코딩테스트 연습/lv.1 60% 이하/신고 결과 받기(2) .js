function solution(ids, repo, k) {
  let reports = [...new Set(repo)].map((e) => e.split(' '))
  let reporter = new Map()
  let banTarget = new Map()

  for (let report of reports) {
    banTarget.set(report[1], banTarget.get(report[1]) + 1 || 1)
  }
  for (let report of reports) {
    if (banTarget.get(report[1]) >= k) {
      reporter.set(report[0], reporter.get(report[0]) + 1 || 1)
    }
  }
  let result = ids.map((id) => (reporter.has(id) ? reporter.get(id) : 0))

  return result
}
