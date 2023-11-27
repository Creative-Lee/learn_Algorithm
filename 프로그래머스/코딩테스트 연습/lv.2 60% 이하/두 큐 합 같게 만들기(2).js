function solution(queue1, queue2) {
  let count = 0
  let p1 = 0
  let p2 = queue1.length
  let sum1 = queue1.reduce((sum, v) => sum + v, 0)
  let sum2 = queue2.reduce((sum, v) => sum + v, 0)
  const queue = [...queue1, ...queue2]

  for (let i = 0; i < queue1.length * 4; i += 1) {
    if (sum1 === sum2) return count
    if (sum1 > sum2) {
      const poped = queue[p1]
      sum1 -= poped
      sum2 += poped
      p1 += 1
      count += 1
    } else {
      const poped = queue[p2]
      sum1 += poped
      sum2 -= poped
      p2 += 1
      count += 1
    }
  }

  return -1
}

// 각 큐의 합이 더 큰 쪽에서 pop하고 작은쪽에 push

// 1번 큐    2번 큐
// ㅁㅁㅁㅁ   ㅁㅁㅁㅁ
// 맨앞 빼서
// 포인터를 2개 만드는게 포인트
