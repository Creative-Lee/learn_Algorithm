function solution(arr1, arr2) {
  // [0][0] [1][0]  [0][1] [1][1]
  // 답은 arr1.length * arr2[0].length 행렬 나옴
  // 매 연산은 arr1[0 ~ 2]의 [0 ~ 1] 과  arr2[0 ~ 1] 의 [0 ~ 1] 을  *

  // [0][0] , [0][1] , [0][2]    // [0][0], [1][0], [2][0]
  // [1][0] , [1][1] , [1][2]    // [0][1], [1][1], [2][1]
  // [2][0] , [2][1] , [2][2]
  let result = []
  for (let i = 0; i < arr1.length; i++) {
    let arr = []
    for (let j = 0; j < arr2[0].length; j++) {
      let calc = arr1[i].map((e, idx) => e * arr2[idx][j]).reduce((p, c) => p + c, 0)
      arr.push(calc)
    }
    result.push(arr)
  }
  return result
}
