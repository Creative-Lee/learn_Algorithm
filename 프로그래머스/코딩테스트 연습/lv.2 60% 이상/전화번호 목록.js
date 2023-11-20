function solution(phone_book) {
  const numbers = phone_book.sort()

  return !numbers.some((number, idx) => {
    const nextNum = numbers[idx + 1]

    if (nextNum === undefined || number.length === nextNum) return false

    return nextNum.startsWith(number)
  })
}

// 정렬하고
// 자신보다 길이가 긴것이랑만 비교
