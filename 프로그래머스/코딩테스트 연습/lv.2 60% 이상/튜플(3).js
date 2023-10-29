function solution(s) {
  const converted = s
    .substring(2, s.length - 2)
    .split('},{')
    .map(a => a.split(',').map(Number))
    .sort((a, b) => a.length - b.length)

  const tuple = new Set()

  converted.forEach(arr => {
    arr.forEach(el => tuple.add(el))
  })

  return [...tuple]
}

// 1. 배열만들기
//      1. 양끝 괄호 제거
//      2.

// 2. 순회하면서
