function solution(str1, str2) {
  str1 = str1.toUpperCase()
  str2 = str2.toUpperCase()

  const set1 = getSubstringSet(str1)
  const set2 = getSubstringSet(str2)

  const intersection = getIntersection(set1, set2)
  const union = getUnion(set1, set2, intersection)

  const jaccard = Math.floor((intersection.length / union.length) * 65536)

  return Number.isNaN(jaccard) ? 65536 : jaccard
}

const getIntersection = (arr1, arr2) => {
  const duplicate = [...arr1]

  const intersection = []

  arr2.forEach(str => {
    if (duplicate.includes(str)) {
      const idx = duplicate.findIndex(dup => dup === str)
      duplicate.splice(idx, 1)
      intersection.push(str)
      return
    }
  })

  return intersection
}

const getUnion = (arr1, arr2, intersection) => {
  const duplicate = [...intersection]

  const union = []
  const sum = [...arr1, ...arr2]

  sum.forEach(str => {
    if (duplicate.includes(str)) {
      const idx = duplicate.findIndex(dup => dup === str)
      duplicate.splice(idx, 1)
      return
    }
    union.push(str)
  })

  return union
}

const getSubstringSet = str => {
  const dict = new Set('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  const set = []

  for (let i = 0; i < str.length - 1; i++) {
    const substring = str.slice(i, i + 2)
    if (!dict.has(str[i]) || !dict.has(str[i + 1])) continue

    set.push(substring)
  }

  return set
}
