function solution(n, works) {
    var answer = 0;
    
    const l = works.length
    
    works.sort((a,b)=>b-a)
    while (n > 0) {

        let maxV = works[0]
        if (maxV === 0) return 0
        for(let i=0; i<l; i++) {
            if (works[i] === maxV) {
                works[i]--
                n--
                if (!n) break
            }
        }
        
        maxV --
        if (!maxV) break

    }
    
    for (const work of works) {
        answer += work**2
    }
    
    return answer;
}