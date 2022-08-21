function solution(pp, ss) {
  let stack = [];

  pp.map((p, idx, arr) => {
    let s = ss[idx];
    let compDay = Math.ceil((100 - p) / s);
    let compareArr = stack[stack.length - 1];

    if (compareArr && compareArr[0] >= compDay) {
      compareArr.push(compDay);
    } else {
      stack.push([compDay]);
    }
  });

  stack = stack.map((arr) => arr.length);

  return stack;
}
