function solution(s) {
  let min = Math.min(...s.split(' ').map((e) => +e))
  let max = Math.max(...s.split(' ').map((e) => +e))

  return `${min} ${max}`
}
