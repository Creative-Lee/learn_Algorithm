const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;
tcs = tcs.map((e) => e.trim());

function solution() {
  class Deque {
    dq = [];
    result = [];

    push_front(x) {
      this.dq.unshift(x);
    }
    push_back(x) {
      this.dq.push(x);
    }
    pop_front() {
      this.dq[0] ? this.result.push(this.dq.shift()) : this.result.push(-1);
    }
    pop_back() {
      this.dq[this.dq.length - 1] ? this.result.push(this.dq.pop()) : this.result.push(-1);
    }
    size() {
      this.result.push(this.dq.length);
    }
    empty() {
      this.dq.length === 0 ? this.result.push(1) : this.result.push(0);
    }
    front() {
      this.dq[0] ? this.result.push(this.dq[0]) : this.result.push(-1);
    }
    back() {
      this.dq[this.dq.length - 1]
        ? this.result.push(this.dq[this.dq.length - 1])
        : this.result.push(-1);
    }
  }

  let dq = new Deque();

  for (let i = 0; i < tcc; i++) {
    let [method, para] = tcs[i].split(" ");
    if (para) {
      dq[method](para);
      continue;
    }
    dq[method]();
  }
  console.log(dq.result.join("\n"));
}

solution();
