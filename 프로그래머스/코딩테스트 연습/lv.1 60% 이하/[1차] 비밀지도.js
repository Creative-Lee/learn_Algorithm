function solution(n, arr1, arr2) {
  const addZero = (n, str) => {
    return '0'.repeat(n - str.length) + str
  }

  arr1 = arr1.map((e) => {
    let binary = e.toString(2)
    return addZero(n, binary)
  })
  arr2 = arr2.map((e) => {
    let binary = e.toString(2)
    return addZero(n, binary)
  })

  let trueMap = new Array(n).fill('')

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let map1 = arr1[i][j]
      let map2 = arr2[i][j]
      if (map1 === '0' && map2 === '0') {
        trueMap[i] = trueMap[i] + ' '
        continue
      }
      if (map1 === '1' || map2 === '1') {
        trueMap[i] = trueMap[i] + '#'
        continue
      }
    }
  }

  return trueMap
}
//공백은 모두 공백이어야 공백
//벽은 하나만 벽이여도 벽
//벽은 1  공백은 0
//벽은 샾 공백은 ''
// 주어지는 arr의 가로 줄 하나를  10진수 ---> 2진수로
