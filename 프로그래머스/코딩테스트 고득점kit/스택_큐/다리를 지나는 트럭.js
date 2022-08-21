function solution(bl, w, tw) {
  let time = 0;
  let bridge = new Array(bl).fill(0);
  let truckNum = 0;
  let done = [];

  while (true) {
    time++;
    let shifted = bridge.shift();
    if (shifted !== 0) {
      done.push(shifted);
      if (done.length === tw.length) return time;
    }

    let nextBridge = [...bridge];
    nextBridge.push(tw[truckNum]);

    if (nextBridge.reduce((a, b) => a + b) <= w) {
      bridge.push(tw[truckNum]);
      truckNum++;
    } else {
      bridge.push(0);
    }
  }
}
