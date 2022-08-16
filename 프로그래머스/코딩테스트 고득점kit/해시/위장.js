function solution(clothes) {
  let map = new Map();

  for (let [name, type] of clothes) {
    map.set(type, (map.get(type) || 0) + 1);
  }

  let count = [...map.values()].map((val) => val + 1).reduce((a, b) => a * b) - 1;

  if (map.size === 1) return [...map.values()][0];
  return count;
}
// 각 타입별 의상 수 끼리 전부 곱하고 -1
