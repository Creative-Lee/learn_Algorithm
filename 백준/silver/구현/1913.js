const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let [n, target] = fs.readFileSync(file).toString().trim().split('\n')
n = +n
target = +target

function solution() {
  let cord // target값과 일치하는 좌표 담을 곳
  let arr = new Array(n).fill('').map((e) => new Array(n).fill(0)) // 정답 입력할 이중 배열

  let direction = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]
  // 순서대로 하, 우, 상, 좌   이중 배열에서 좌표 탐색을 위해 필요한 x, y값
  let directionNum = 0 // 0 ~ 3까지  아래에서 설명 이어짐

  let x1 = 0 // x좌표
  let y1 = 0 // y좌표
  let num = n * n // 왼쪽 위 끝부터 달팽이 모양으로 돌면서 할당 할 숫자

  while (num > 0) {
    arr[x1][y1] = num-- // 해당 좌표에 num 할당하고 num 1 감소시킴
    if (arr[x1][y1] === target) cord = `${x1 + 1} ${y1 + 1}` // 좌표가 가진 값이 target 값이면 좌표 저장
    let [mx, my] = direction[directionNum] // x,y 이동값 -> 시작은 아래 방향으로 (directionNum === 0 이다)
    x1 += mx // x좌표값에 x이동값 만큼 더함
    y1 += my // y좌표값에 y이동값 만큼 더함

    if (arr[x1] === undefined || arr[x1][y1] === undefined || arr[x1][y1] !== 0) {
      // 이동시킨 값이 범위를 벗어나거나, 좌표에 해당하는 값이 0이 아닌경우 (이미 할당된 곳일 경우)
      x1 -= mx // x좌표값 다시 빠꾸
      y1 -= my // y좌표값 다시 빠꾸

      if (directionNum === 3) directionNum = 0 // 방향을 바꿔줌
      else directionNum++ // 방향을 바꿔줌

      x1 += direction[directionNum][0] // x좌표값에 x이동값 만큼 더함 (x이동값 바뀌었으니깐)
      y1 += direction[directionNum][1] // y좌표값에 y이동값 만큼 더함 (y이동값 바뀌었으니깐)
    }
  }

  console.log(arr.map((e) => e.join(' ')).join('\n')) //이중배열 join해서 출력
  console.log(cord) // 좌표 출력
}
solution()
