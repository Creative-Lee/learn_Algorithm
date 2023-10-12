const solution = (tree, userTrees) => {
  const skillSet = new Set(tree)
  return userTrees.filter(userTree => {
    const test = [...userTree].filter(skill => skillSet.has(skill)).join('')

    return tree.startsWith(test)
  }).length
}
