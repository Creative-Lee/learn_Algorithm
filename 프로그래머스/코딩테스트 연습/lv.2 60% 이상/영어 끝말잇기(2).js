function solution(n, words) {
  let round = 1

  for (let i = 1; i < words.length; i++) {
    if (i % n === 0) round++
    if (
      words[i - 1][words[i - 1].length - 1] !== words[i][0] ||
      words.slice(0, i).includes(words[i])
    ) {
      let failManNum = (i % n) + 1
      return [failManNum, round]
    }
  }
  return [0, 0]
}
// 중복과 탈락을 동시에 체크해야함
