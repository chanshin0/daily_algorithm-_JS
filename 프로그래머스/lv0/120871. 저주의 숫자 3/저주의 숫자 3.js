function solution(n) {
    var answer = 0;
    
    for (let i=1; i<=n; i++){
        answer ++
        
        while(true){
            let str = answer.toString().split('')
            if (answer%3===0) answer ++
            else if (str.includes('3')){
                answer ++
            }
            else break
        }
    }
    
    return answer;
}