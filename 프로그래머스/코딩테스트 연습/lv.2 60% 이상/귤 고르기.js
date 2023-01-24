function solution(k, t) {   
  t.sort((a,b)=> a - b)

  let map = new Map()

  t.forEach(size => map.set(size, map.get(size) + 1 || 1))

  t.sort((a,b) => {
      const countA = map.get(a)
      const countB = map.get(b)

      return countB - countA
  })

  const count = []
  t.slice(0, k).forEach(size=>{
      if(count[count.length - 1] !== size){
          count.push(size)
      }
  })

  return count.length

}