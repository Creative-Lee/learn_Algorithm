const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;
tcs = tcs.map((e) => e.trim());

function solution() {
  class Stack {
    arr = [];
    result = [];

    push(x) {
      this.arr.push(x);
    }
    pop() {
      if (this.arr.length === 0) {
        this.result.push(-1);
        return;
      }
      this.result.push(this.arr.pop());
    }
    size() {
      this.result.push(this.arr.length);
    }
    empty() {
      if (this.arr.length === 0) {
        this.result.push(1);
        return;
      }
      this.result.push(0);
    }
    top() {
      if (this.arr.length === 0) {
        this.result.push(-1);
        return;
      }
      this.result.push(this.arr[this.arr.length - 1]);
    }
  }

  let stack = new Stack();

  for (let i = 0; i < tcc; i++) {
    let method = tcs[i];
    let parameter;

    if (tcs[i].split(" ").length === 2) {
      method = tcs[i].split(" ")[0];
      parameter = tcs[i].split(" ")[1];
    }

    stack[method](parameter);
  }

  console.log(stack.result.join("\n"));
}

solution();
