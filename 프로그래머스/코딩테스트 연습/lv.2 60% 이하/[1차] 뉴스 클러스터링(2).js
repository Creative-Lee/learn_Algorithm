function solution(str1, str2) {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  let arr1 = []
  let arr2 = []

  for (let i = 0; i < str1.length - 1; i++) {
    let sliced = str1.slice(i, i + 2) // i 포함 2개 자르기
    let char = [sliced[0].charCodeAt(), sliced[1].charCodeAt()]
    if (char.filter((e) => 97 <= e && e <= 122).length === 2) {
      arr1.push(sliced)
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    let sliced = str2.slice(i, i + 2) // i 포함 2개 자르기
    let char = [sliced[0].charCodeAt(), sliced[1].charCodeAt()]
    if (char.filter((e) => 97 <= e && e <= 122).length === 2) {
      arr2.push(sliced)
    }
  }

  let set = new Set([...arr1, ...arr2]) // 각 집합의 모든 원소가 중복없이 들어가 있음
  let intersection = 0 // 교집합의 원소 수
  let union = 0 // 합집합의 원소 수

  set.forEach((e) => {
    let dup1 = arr1.filter((e1) => e1 === e).length // set의 각 원소 e가 arr1에 몇개 있는지
    let dup2 = arr2.filter((e2) => e2 === e).length // set의 각 원소 e가 arr2에 몇개 있는지

    intersection += Math.min(dup1, dup2) // 각 집합이 가진 해당 원소 수의 최소값만큼 교집합의 원소수를 증가시킴
    union += Math.max(dup1, dup2) // 각 집합이 가진 해당 원소 수의 최대값만큼 합집합의 원소수를 증가시킴
  })

  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536)
  // 합집합의 원소수가 0 이라는건 각 집합이 공집합이였다는 뜻 -> 그럼 65536 return
  // 아니라면 조건대로 자카드 유사도 * 65536 을 소수점 버림 해서 return
}

// ------ 조건 정리 ------
// 대문자 소문자 무시 => 하나로 변환
// 다중집합 원소 = 특문 공백 숫자 다 버림
// 중복을 허용하는 다중집합에서
// 교집합 -> 각 집합이 가지고 있는 서로 겹치는 원소 a의 수 중 작은값 min(a,b)
// 합집합 -> 각 집합이 가지고 있는 서로 겹치는 원소 a의 수 중 큰값 max(a,b)
// 교,합집합의 원소 개수만 세면 된다.
