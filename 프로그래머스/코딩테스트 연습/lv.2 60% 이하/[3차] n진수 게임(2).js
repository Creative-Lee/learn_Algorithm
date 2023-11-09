function solution(n, t, m, p) {
  let result = ''
  let orderCount = 0
  
  for(let i = 0; i < 1000 * m; i++){
      const converted = i.toString(n).toUpperCase()
      
      for(let j = 0; j < converted.length; j++){
          if(result.length === t) return result
          
          orderCount += 1
          
          if(m === p && orderCount % m === 0){
              result += converted[j]
          }
        
          if(orderCount % m === p){
              result += converted[j]
          }
      }
  }
}

// n 진법
// 숫자 갯수 t
// 인원 m
// 순서 p

// 전체 숫자는?
// 자기 차례가 올때마다 결과 문자열에 +=
//      자기 차례는 어떻게? 