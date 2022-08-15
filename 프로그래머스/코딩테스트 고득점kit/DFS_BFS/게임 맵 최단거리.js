function solution(maps) {
  let graph = maps;
  let n = graph.length;
  let m = graph[0].length;

  let check = [];
  for (let i = 0; i < n; i++) {
    check.push(new Array(m).fill(0));
  }

  function bfs(x, y) {
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];
    let queue = [];
    queue.push([x - 1, y - 1]);
    check[x - 1][y - 1]++;

    while (queue.length) {
      let [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        let [nx, ny] = [x + dx[i], y + dy[i]];

        if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
        if (graph[nx][ny] === 1 && check[nx][ny] === 0) {
          check[nx][ny] = check[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
  bfs(1, 1);

  if (check[n - 1][m - 1] === 0) {
    return -1;
  } else {
    return check[n - 1][m - 1];
  }
}
