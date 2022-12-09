function solution(ingredients) {
  const stack = []

  return ingredients.reduce((count, ingredient) => {
    stack.push(ingredient)

    if (stack.slice(-4).join('') === '1231') {
      stack.splice(-4)
      count += 1
    }

    return count
  }, 0)
}
