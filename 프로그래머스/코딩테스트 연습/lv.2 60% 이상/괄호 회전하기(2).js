function solution(s) {
  let mapping = { '}': '{', ']': '[', ')': '(' }
  let count = 0
  for (let i = 0; i < s.length; i++) {
    let rotate = s.slice(i) + s.slice(0, i)
    let stack = []
    let isGood = true
    for (let j = 0; j < s.length; j++) {
      if (rotate[j] === '{' || rotate[j] === '[' || rotate[j] === '(') {
        stack.push(rotate[j])
      } else {
        if (stack.pop() !== mapping[rotate[j]]) {
          isGood = false
        }
      }
    }
    if (isGood && stack.length === 0) count++
  }
  return count
}
// 왼쪽떼서 오른쪽에 붙였을 때 0칸 ~ s.length - 1 칸 까지  ex) [][][] == 0번 ~ 5번
// 올바른 괄호열이다 ! 그럼 count ++ 횟수를 리턴해야함
