const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;
tcs = tcs.map((e) => e.trim());

function solution() {
  class Queue {
    qu = [];
    answer = [];

    push(x) {
      this.qu.push(x);
    }
    pop() {
      this.qu[0] ? this.answer.push(this.qu.shift()) : this.answer.push(-1);
    }
    size() {
      this.answer.push(this.qu.length);
    }
    empty() {
      this.qu.length === 0 ? this.answer.push(1) : this.answer.push(0);
    }
    front() {
      this.qu[0] ? this.answer.push(this.qu[0]) : this.answer.push(-1);
    }
    back() {
      this.qu[this.qu.length - 1]
        ? this.answer.push(this.qu[this.qu.length - 1])
        : this.answer.push(-1);
    }
  }

  let qu = new Queue();
  for (let tc of tcs) {
    let [method, para] = tc.split(" ");

    if (method === "push") {
      qu[method](+para);
      continue;
    }
    qu[method]();
  }
  console.log(qu.answer.join("\n"));
}

solution();
