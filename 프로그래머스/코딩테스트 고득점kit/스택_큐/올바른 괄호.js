function solution(s) {
  var answer = true;
  let stack = [];

  for (let b of s) {
    if (b === "(") {
      stack.push("(");
      continue;
    }
    if (b === ")") {
      if (stack[stack.length - 1] !== "(") {
        answer = false;
        break;
      } else {
        stack.pop();
        continue;
      }
    }
  }
  if (stack.length !== 0) {
    answer = false;
  }

  return answer;
}
