function solution(arr1, arr2) {
  let result2 = []
  for (let i = 0; i < arr1.length; i++) {
    let result1 = []
    for (let j = 0; j < arr2[0].length; j++) {
      let mul = arr1[i].map((row, idx) => row * arr2[idx][j]).reduce((p, c) => p + c, 0)
      result1.push(mul)
    }
    result2.push(result1)
  }
  return result2
}
