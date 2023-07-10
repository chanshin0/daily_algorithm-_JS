function solution(k, d) {
    var answer = 0;
    
    // a**2 = c**2 - b**2
    for (let i=0; i<=d; i+=k) {
        const side = Math.floor((d**2 - i**2)**0.5)
        answer += ~~(side/k) + 1
    }
    
    return answer;
}