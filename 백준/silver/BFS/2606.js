const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [C, linkCC, ...linkC] = fs.readFileSync(file).toString().trim().split("\n");

C = +C;
linkCC = +linkCC;
linkC = linkC.map((e) =>
  e
    .trim()
    .split(" ")
    .map((e) => +e)
);

function solution() {
  function linking(n1, n2) {
    if (!n1.adjacenyNode.includes(n2)) {
      n1.adjacenyNode.push(n2);
    }
    if (!n2.adjacenyNode.includes(n1)) {
      n2.adjacenyNode.push(n1);
    }
  }

  let graph = [];

  class Node {
    adjacenyNode = [];
    constructor(data) {
      this.data = data;
      this.visited = false;
    }
  }

  for (let i = 0; i < C; i++) {
    let node = new Node(i + 1);
    graph.push(node);
  }

  for (let link of linkC) {
    let nodeData1 = link[0];
    let nodeData2 = link[1];

    linking(graph[nodeData1 - 1], graph[nodeData2 - 1]);
  }

  let queue = [];

  queue.push(graph[0]);
  visited = true;
  let count = 0;

  while (queue.length) {
    let dequeuedNode = queue.shift();

    for (let adjacenyNode of dequeuedNode.adjacenyNode) {
      if (adjacenyNode.visited === false) {
        adjacenyNode.visited = true;
        queue.push(adjacenyNode);
        count++;
      }
    }
  }

  console.log(count - 1);
}

solution();
// 30분 over
