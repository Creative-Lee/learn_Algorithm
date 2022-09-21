function solution(n) {
  let binary = n.toString(2)
  let oneCount = 0
  for(let num of binary){
      if(num === '1') oneCount++
  }
  let i = n + 1
 
  while(true){
      let nextBinary = i.toString(2)
      let nextOneCount = 0
      for(let num of nextBinary){
          if(num === '1') nextOneCount++
      }
      if(nextOneCount === oneCount){
          return i
      }
      i++
  }
}
