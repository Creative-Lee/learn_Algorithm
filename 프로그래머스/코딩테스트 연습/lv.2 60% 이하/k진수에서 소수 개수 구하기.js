function solution(n, k) {
  let convert = n.toString(k)

  const isPrime = (n) => {
    if (!n || n === 1) return false

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false
    }
    return true
  }

  let stack = []
  let count = 0
  for (let i = 0; i < convert.length; i++) {
    if (convert[i] !== '0') {
      stack.push(convert[i])
    } else {
      let num = stack.join('')
      if (isPrime(+num)) {
        count++
      }
      stack = []
    }
  }
  if (stack.length) {
    if (isPrime(+stack.join(''))) count++
  }

  return count
}
//0일때 스택에 있는 숫자가 소수면 카운트 스택 초기화
//다른 숫자일때
