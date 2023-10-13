function solution(nums) {
  const clearDuplicate = new Set(nums)

  const maxCount = clearDuplicate.size
  const minCount = Math.ceil(nums.length / 2)

  return maxCount < minCount ? maxCount : minCount
}
