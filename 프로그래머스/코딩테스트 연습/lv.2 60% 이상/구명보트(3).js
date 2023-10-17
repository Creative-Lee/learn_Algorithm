function solution(people, limit) {
  const _people = [...people]
  _people.sort((a, b) => a - b)

  let boatCount = 0
  let skinnyManIdx = 0
  let fatManIdx = _people.length - 1

  _people.forEach(person => {
    const skinnyMan = _people[skinnyManIdx]
    const fatMan = _people[fatManIdx]

    if (skinnyManIdx > fatManIdx) return

    if (skinnyMan + fatMan > limit) {
      boatCount += 1
      fatManIdx -= 1
      return
    }

    boatCount += 1
    skinnyManIdx += 1
    fatManIdx -= 1
  })

  return boatCount
}

//제일 작은 사람과 제일 무거운 사람을 비교
