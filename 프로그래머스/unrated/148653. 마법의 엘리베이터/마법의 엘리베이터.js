function solution(storey) {
    var answer = 0;
    
    while (storey) {
        let [quot, rest] = [~~(storey/10), storey%10]
        // console.log(storey, quot, rest)
        if (rest < 5) {
            answer += rest  
            
        } else if (rest === 5) {
            if (quot%10 <= 4) {
                answer += 5
            } else {
                answer += 5
                quot += 1
            }   
        } else {
            answer += (10-rest)
            quot += 1
        }

        
        storey = quot
    }

    
    return answer;
}