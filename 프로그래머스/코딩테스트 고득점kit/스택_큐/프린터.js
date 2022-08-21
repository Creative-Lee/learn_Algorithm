function solution(p, l) {
  let order = [];

  let queue = [];

  for (let i = 0; i < p.length; i++) {
    let arr = [i, p[i]];
    queue.push(arr);
  }

  while (true) {
    if (queue.length === 0) break;

    let isLargest = queue.filter((arr) => queue[0][1] < arr[1]).length === 0 ? true : false;

    if (isLargest) {
      order.push(queue[0][0]);
      queue.shift();
    } else {
      let shifted = queue.shift();
      queue.push(shifted);
    }
  }

  return order.indexOf(l) + 1;
}
