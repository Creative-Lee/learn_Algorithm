const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tcs] = fs.readFileSync(file).toString().trim().split("\n");

tcc = +tcc;
tcs = tcs.map((e) => e.trim());

function solution() {
  class S {
    result = [];
    set = new Set();

    add(x) {
      this.set.add(x);
    }
    remove(x) {
      this.set.delete(x);
    }
    check(x) {
      if (this.set.has(x)) this.result.push(1);
      else this.result.push(0);
    }
    toggle(x) {
      if (this.set.has(x)) {
        this.set.delete(x);
      } else {
        this.set.add(x);
      }
    }
    all() {
      for (let i = 1; i <= 20; i++) {
        this.set.add(i);
      }
    }
    empty() {
      this.set.clear();
    }
  }
  let s = new S();

  for (let tc of tcs) {
    let [method, parameter] = tc.split(" ");

    if (parameter) {
      s[method](parameter);
      continue;
    }
    s[method]();
  }
  console.log(s.result.join("\n"));
}
solution();

//이 문제는 js 풀이할 수 없다.
