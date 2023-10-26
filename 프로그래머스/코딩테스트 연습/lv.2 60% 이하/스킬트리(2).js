const solution = (tree, userTrees) => {
  const treeSet = new Set(tree)
  return userTrees.filter(userTree => {
    const coreSkill = [...userTree].filter(skill => treeSet.has(skill)).join('')

    return tree.startsWith(coreSkill)
  }).length
}

// 유저트리에서 스킬트리 해당되는 문자열 빼고 제거
// 시작하는 문자열 찾기
