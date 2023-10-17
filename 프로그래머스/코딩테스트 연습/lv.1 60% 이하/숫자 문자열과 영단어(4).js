function solution(s) {
  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

  numbers.forEach((number, idx) => {
    s = s.split(number).join(idx)
  })

  return +s
}
