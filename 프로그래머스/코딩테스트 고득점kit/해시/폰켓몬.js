function solution(nums) {
  let pSet = new Set(nums);
  if (pSet.size < Math.floor(nums.length / 2)) return pSet.size;
  return Math.floor(nums.length / 2);
}
