function solution(id_list, report, k) {
  const reportList = [...new Set(report)].map(log => log.split(' '))
  const reportCount = new Map()
  const killCount = new Map()

  reportList.forEach(([_, imposter]) => {
    reportCount.set(imposter, reportCount.get(imposter) + 1 || 1)
  })

  reportList.forEach(([reporter, imposter]) => {
    if (reportCount.get(imposter) >= k) {
      killCount.set(reporter, killCount.get(reporter) + 1 || 1)
    }
  })

  return id_list.map(id => {
    return killCount.has(id) ? killCount.get(id) : 0
  })
}
