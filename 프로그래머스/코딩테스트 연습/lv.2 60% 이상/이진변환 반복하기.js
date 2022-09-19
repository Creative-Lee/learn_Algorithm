function solution(s) {
  let zero = 0
  let trance = 0
  while (true) {
    if (s.length === 1 && s[0] === '1') break
    let zeroCount = 0
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '0') zeroCount++
    }
    zero += zeroCount

    s = (s.length - zeroCount).toString(2)
    trance++
  }

  return [trance, zero]
}
