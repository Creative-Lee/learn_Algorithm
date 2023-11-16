function solution(want, number, discount) {
  let count = 0
  const wishList = []

  want.forEach((w, idx) => {
    const count = number[idx]

    wishList.push(w.repeat(count))
  })

  wishList.sort()

  discount.forEach((dis, idx) => {
    if (discount.length - idx + 1 < 10) return
    const tenDay = discount.slice(idx, idx + 10)
    const _wishList = [...wishList]
    tenDay.sort()

    if (tenDay.join('') === _wishList.join('')) count += 1
  })

  return count
}

// 돈쓰면 10일 회원
// 회원은 매일 1제품 할인
// 할인품 1개 구매가능
// 아 원하는 상품 모두 할인 구매 가능한 날 갯수 카운트
// 없으면 0

// 할인 배열

// 1시간
