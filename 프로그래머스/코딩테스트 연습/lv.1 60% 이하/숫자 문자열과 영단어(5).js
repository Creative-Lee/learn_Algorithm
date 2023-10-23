function solution(s) {
  const map = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  }

  Object.keys(map).forEach(word => (s = s.replaceAll(word, map[word])))

  return Number(s)
}

// 필요한 정보
// 1. 문자:숫자 맵
