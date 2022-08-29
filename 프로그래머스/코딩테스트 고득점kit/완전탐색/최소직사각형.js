function solution(sizes) {
  sizes = sizes.map((arr) => {
    return arr.sort((a, b) => b - a);
  });

  let w = sizes.map((arr) => arr[0]);
  let h = sizes.map((arr) => arr[1]);

  let wMax = Math.max(...w);
  let hMax = Math.max(...h);

  return wMax * hMax;
}
