function solution(queue1, queue2) {
  const { length } = queue1
  let sum1 = queue1.reduce((sum, e) => sum + e, 0)
  let sum2 = queue2.reduce((sum, e) => sum + e, 0)
  const queue1Pointer = [0, queue1.length]
  const queue2Pointer = [0, queue2.length]

  const queuing1 = () => {
    const poped = queue1[queue1Pointer[0]]
    queue1Pointer[0] += 1
    queue2.push(poped)
    queue2Pointer[1] += 1
    sum1 -= poped
    sum2 += poped
  }

  const queuing2 = () => {
    const poped = queue2[queue2Pointer[0]]
    queue2Pointer[0] += 1
    queue1.push(poped)
    queue1Pointer[1] += 1
    sum2 -= poped
    sum1 += poped
  }

  let count = 0
  let queuingCount = 0

  while (length * 4 >= queuingCount) {
    if (sum1 > sum2) {
      queuing1()
      queuingCount += 1
    } else if (sum1 < sum2) {
      queuing2()
      queuingCount += 1
    } else {
      return queuingCount
    }
  }

  return -1
}

// shift가 pop이다
// push가 insert다

// 두큐 합의 절반을 가지도록 해야함.
// 더 작은쪽 큐로 큰수를 옮겨야함,.
// 더 작은 쪽 큐의 맨 앞이
