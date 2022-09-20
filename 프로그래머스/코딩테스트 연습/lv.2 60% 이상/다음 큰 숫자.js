function solution(n) {
  let next = 0
  let oneCount = 0
  let binary = n.toString(2)

  for (let num of binary) {
    if (num === '1') oneCount++
  }
  let num = n + 1
  while (true) {
    let newBinary = num.toString(2)
    let newOneCount = 0
    for (let num of newBinary) {
      if (num === '1') newOneCount++
    }

    if (newOneCount === oneCount) {
      next = num
      break
    }

    num++
  }
  return next
}
