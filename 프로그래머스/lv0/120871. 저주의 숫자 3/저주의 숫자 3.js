function solution(n) {
    var answer = 0;
    
    for (let i=1; i<=n; i++){
        answer ++
        while(answer%3 ===0){
            answer ++
        }
        
        
        while (true){
            let str = answer.toString().split('')
            if (str.includes('3')){
                answer ++
                while(answer%3 ===0){
                    answer ++
                }
                str = answer.toString().split('')
            }
            else break
        }
    }
    
    return answer;
}