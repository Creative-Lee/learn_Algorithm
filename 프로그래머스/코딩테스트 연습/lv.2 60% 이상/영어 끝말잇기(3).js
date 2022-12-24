function solution(n, words) {    
    let round = 1
    
    for(let i = 1; i < words.length; i++){
        const currentFirst = words[i][0]
        const beforeLast = words[i-1][words[i-1].length-1]
        let pass = (currentFirst === beforeLast) && !(words.slice(0, i).includes(words[i]))
        
        if(i % n === 0) round++
        if(!pass) return [i % n + 1, round]
    }
    
    return [0,0];
}
