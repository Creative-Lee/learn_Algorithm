function solution(s) {
  if (s.length % 2 !== 0) return 0
  let count = 0

  const isGood = (rotatedS) => {
    let stack = []
    let mapping = { '}': '{', ']': '[', ')': '(' }

    for (let i = 0; i < rotatedS.length; i++) {
      if (rotatedS[i] === '[' || rotatedS[i] === '{' || rotatedS[i] === '(') {
        stack.push(rotatedS[i])
      } else {
        if (stack.pop() !== mapping[rotatedS[i]]) return false
      }
    }
    if (stack.length === 0) return true
    return false
  }

  const rotate = (i) => {
    return s.slice(i) + s.slice(0, i)
  }

  for (let i = 0; i < s.length; i++) {
    let rotatedS = rotate(i)
    if (isGood(rotatedS)) count++
  }
  return count
}
// 왼쪽떼서 오른쪽에 붙였을 때 0칸 ~ s.length - 1 칸 까지  ex) [][][] == 0번 ~ 5번
// 올바른 괄호열이다 ! 그럼 count ++ 횟수를 리턴해야함
