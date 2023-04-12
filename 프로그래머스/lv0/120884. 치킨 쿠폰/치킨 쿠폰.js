function solution(chicken) {
    var answer = 0;
    
    let rest = 0
    while(chicken){
        rest += chicken%10
        chicken = Math.floor(chicken/10)
        chicken += Math.floor(rest/10)
        
        answer += chicken
        
        rest %= 10
    }

    return answer;
}