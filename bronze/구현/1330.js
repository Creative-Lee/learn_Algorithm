const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const solution = (a, b) => {
  if (+a < +b) return "<";
  if (+a > +b) return ">";
  if (+a == +b) return "==";
};

console.log(solution(a, b));
