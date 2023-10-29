function solution(files) {
  const cuts = files.map(file => file.match(/(\D+)(\d+)/))

  cuts.sort((a, b) => {
    if (a[1].toLowerCase() > b[1].toLowerCase()) return 1
    if (a[1].toLowerCase() < b[1].toLowerCase()) return -1

    return Number(a[2]) - Number(b[2])
  })

  return cuts.map(cut => cut.input)
}

// 1. head number tail 구조의 문자열
//      1. 첫 숫자가 나오면 짤라
//      2. 다시 문자가 나오면 짤라 or 안나오면 짤라
//

// 정렬 시도
// 1. head 사전순 정렬
// 2. number 숫자 순 정렬 - *아직 문자임
