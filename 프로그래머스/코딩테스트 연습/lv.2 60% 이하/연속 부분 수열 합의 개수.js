function solution(elements) {
    let set = new Set()
    
    for(let i = 1; i <= elements.length; i++){
        const circle = elements.concat(elements.slice(0, i))
        
        for(let j = 0; j < elements.length; j++){
            const sub = circle.slice(j, i + j)
            const sum = sub.reduce((a, b) => a + b, 0)
            
            set.add(sum)
        }
    }
    
    return set.size
}
