const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [matrix, ...value] = fs.readFileSync(file).toString().trim().split("\n");
matrix = matrix.split(" ").map((e) => +e);
let [N, M] = matrix;
value = value.map((e) => e.trim());

let graph = [];
for (let val of value) {
  graph.push(val.split("").map((e) => +e));
} // 그래프 행렬
const check = [];
for (let i = 0; i < N; i++) {
  check.push(new Array(M).fill(0));
} // 체크 그래프 행렬

function bfs(x, y) {
  // 행렬의 index값 받음
  let dx = [-1, 1, 0, 0]; // 상하좌우 이동시 x index 추가 값
  let dy = [0, 0, -1, 1]; // 상하좌우 이동시 y index 추가 값

  let queue = [];
  queue.push([x, y]);
  check[x][y]++; // root 체크

  while (queue.length !== 0) {
    // 이동 못했을 때 queue의 요소가 점점 줄어들겠지
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      // 이동값이 상하좌우 4개임
      const [nx, ny] = [x + dx[i], y + dy[i]];
      // 상하좌우 이동시 index가 추가된 값이 = 이동했을때 좌표
      if (nx < 0 || ny < 0 || N <= nx || M <= ny) continue;
      // 행렬 최대 최소 사이즈 벗어나면 종료(xy -1, x 4이상, y 6이상)
      if (graph[nx][ny] === 1 && check[nx][ny] === 0) {
        // 상하좌우 중 1이면서 방문한적 없는 길이면 방문가능함
        check[nx][ny] = check[x][y] + 1;
        // 방문가능한 길의 체크값은 지금 체크값의 + 1
        // 방문가능한 길이니깐 지금좌표에서 1칸 움직이면 갈 수 있겠네~
        queue.push([nx, ny]); // 큐에 이동가능한 좌표배열을 푸시해주고 종료
      }
    }
  }
  console.log(check[N - 1][M - 1]); // 모든 반복이 종료되면 목표 좌표의 이동 카운트 출력
}

bfs(0, 0);
// 무한대
