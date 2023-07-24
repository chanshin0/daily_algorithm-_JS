function solution(k, score) {
    var answer = [];
    
    const honors = []
    
    while(score.length > 0) {
        const now = score.shift()
        
        honors.push(now)
        honors.sort((a,b)=>b-a)
        
        if (honors.length > k) honors.pop()
        answer.push(honors.at(-1))
    }
    
    return answer;
}