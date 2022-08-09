const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();
input = +input;

// function fibonacci(count, targetCount, n1, n2) {
//   if (targetCount === 0) return 0;
//   if (targetCount === 1) return 1;
//   if (count === targetCount - 2) {
//     return n1 + n2;
//   }

//   return fibonacci(count + 1, targetCount, n2, n1 + n2);
// }

// console.log(fibonacci(0, input, 0, 1));

let sum = 0;
let n1 = 0;
let n2 = 1;
for (let i = 0; i < input - 2; i++) {
  sum += n1 + n2;

  n1 = n2;
  n2 = n1 + n2;
}

console.log(sum);
// 재귀의 핵심은 연산 결과가 초기값이 되는 경우
// 구현할 때는 규칙을 만드는게 중요함
// 1번째와 2번째가 정답이면 3번째, n번째도 정답일것이다.

// arr: 0, 1, 1, 2, 3, 5, 8
// 이렇게 숫자를 쓰는 규칙이 어떤거였는지 말로 풀어서 설명할 수 있어?

// arr(n-2) + arr(n-1) = arr(n)
// 재귀는 앞으로만 가니까 이전을 알기 어렵잖아
// 그래서 - 를 쓰지 않고 +로 바꿔서 쓰면 어떻게 할 수 있을까?

// 0, 1, 1, 2, 3, 5, 8
// arr(n) + arr(n+1) = arr(n+2) -> 0 + 1 = 1
// arr(n+1) + arr(n+2) = arr(n+3) -> 1 + 1 = 2
// arr(n+2) + arr(n+3) = arr(n+4) -> 1 + 2 = 3
// arr(n+3) + arr(n+4) = arr(n+5) -> 2 + 3 = 5

// 연산 1회차
// a = a
// b = b
// c = a + b

// 연산 2회차
// a = b
// b = a + b
// c = a + b + b

// b, c -> a, b 연산 회차가 지날 때 마다

// 초기값은 1회차, a = 0, b = 1
// fun fibonacci(count: Int, targetCount: Int, a: Int, b: Int): Int {
//   if (count == targetCount - 1) {
//       return a + b
//   }

//   return fibonacci(count + 1, targetCount, a = b, b = a + b)
// }

// fun main() {
//   fibonacci(1, 10, 0, 1).also {
//       println(it)
//   }
// }
