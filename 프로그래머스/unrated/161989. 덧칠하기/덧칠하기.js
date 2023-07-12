function solution(n, m, section) {
    var answer = 0;
    
    const isPainted = Array.from({length:n}, v=>0)
    
    while (section.length > 0) {
        let num = section.pop()
        
        if (isPainted[num]) continue
        for (let i=num; i>num-m; i--) {
            isPainted[i] ++
            
        }
        answer ++
    }
    
    return answer;
}