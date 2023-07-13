function solution(t, p) {
    var answer = 0;
    
    const numbers = t.split('').map(v=>+v)
    const compares = p.split('').map(v=>+v)
    const lenCompares = compares.length

    for (let i=0; i<=t.length-lenCompares; i++) {
        const n = numbers[i]
        
        let l = 0
        while (l<lenCompares) {
            if (numbers[i+l] < compares[l]) {
                l = lenCompares
                break;
            } else if (numbers[i+l] === compares[l]) {
                l ++
            } else {
                break;
            }
        }
            
        if (l === lenCompares) answer ++
    }
    
    return answer;
}