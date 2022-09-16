function solution(s) {
  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

  for (let i = 0; i < numbers.length; i++) {
    let splited = s.split(numbers[i])
    let joined = splited.join(i)

    s = joined
  }
  return +s
}
