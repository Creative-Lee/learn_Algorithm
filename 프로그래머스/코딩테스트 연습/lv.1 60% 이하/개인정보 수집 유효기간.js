//  0000.00.00
const getTotalDay = date => {
  const month = 28
  const year = month * 12
  const [y, m, d] = date.split('.').map(Number)

  const yearToDay = y * year
  const monthToDay = m * 28

  return yearToDay + monthToDay + d
}

function solution(today, terms, privacies) {
  const result = []
  const totalDay = getTotalDay(today)

  const termMap = {}
  terms.forEach(term => {
    const [termName, expire] = term.split(' ')
    termMap[termName] = Number(expire) * 28
  })

  privacies.forEach((private, idx) => {
    const [date, term] = private.split(' ')
    const privateTotalDay = getTotalDay(date)

    if (privateTotalDay + termMap[term] <= totalDay) result.push(idx + 1)
  })

  return result
}
