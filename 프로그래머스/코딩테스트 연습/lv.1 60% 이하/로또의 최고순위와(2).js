function solution(nums, wins) {
  const zeroCount = nums.filter(num => num === 0).length
  const matchCount = nums.filter(num => wins.includes(num)).length
  const rankRule = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  }

  const minRank = rankRule[matchCount]
  const maxRank = rankRule[matchCount + zeroCount]

  return [maxRank, minRank]
}

// 필요한 데이터
// 1. 0 제외하고는 몇개나 맞췄는지
// 2. 맞춘 갯수 별 순위 맵

// 위 데이터로 도출할 수 있는것
// 1. 최대 최소 순위

// 20분
