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
  class Node {
    isVisited = false;
    adjacenyNode = [];
  }

  class Graph {
    nodes = [];

    linking(node1, node2) {
      node1.adjacenyNode.push(node2);
      node2.adjacenyNode.push(node1);
    }

    addNode() {
      this.nodes.push(new Node());
    }

    dfs() {
      let visitCount = 0;
      let stack = [];
      stack.push(this.nodes[0]);
      this.nodes[0].isVisited = true;

      while (stack.length) {
        let poped = stack.pop();

        for (let adjacenyNode of poped.adjacenyNode) {
          if (adjacenyNode.isVisited === false) {
            adjacenyNode.isVisited = true;
            stack.push(adjacenyNode);
            visitCount++;
          }
        }
      }
      return visitCount;
    }
  }

  let graph = new Graph();

  for (let i = 0; i < C; i++) {
    graph.addNode();
  }
  for (let link of linkC) {
    graph.linking(graph.nodes[link[0] - 1], graph.nodes[link[1] - 1]);
  }
  console.log(graph.dfs());
}

solution();
//30분 over
