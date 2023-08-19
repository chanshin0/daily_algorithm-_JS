function solution(d, budget) {
    var answer = 0;
    
    d.sort((a,b)=>a-b)
    while(budget > 0 && d.length) {
        budget -= d.shift()
        if (budget < 0) break
        answer ++
    }
    
    return answer;
}