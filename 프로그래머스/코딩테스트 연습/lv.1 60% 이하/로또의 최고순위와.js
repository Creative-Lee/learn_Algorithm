function solution(nums, wins) {
  let match = wins.filter((e) => nums.includes(e)).length
  let zero = nums.filter((e) => !e).length

  let grade = new Map()
  grade.set(6, 1)
  grade.set(5, 2)
  grade.set(4, 3)
  grade.set(3, 4)
  grade.set(2, 5)
  grade.set(1, 6)
  grade.set(0, 6)

  return [grade.get(match + zero), grade.get(match)]
}
