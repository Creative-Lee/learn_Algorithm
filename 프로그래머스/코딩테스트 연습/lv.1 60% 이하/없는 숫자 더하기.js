function solution(numbers) {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  return num.filter(n => !numbers.includes(n)).reduce((a, c) => a + c, 0)
}
