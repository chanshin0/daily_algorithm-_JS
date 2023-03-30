const isPrime = (n)=>{
    if (n<=1) return false
    
    for (let i=2; i<=Math.sqrt(n); i++){
        if (n%i===0) return false
    }
    return true
}

function solution(n) {
    var answer = [];
    
    for (let i =2; i<=n; i++){
        if (!isPrime(i)) continue
        if (n%i===0){
            answer.push(i)
            n = Math.floor(n/i)
            i = 1
            if (isPrime(n)){
                answer.push(n)
                break
            } 
        }
    }
    
    answer = new Set(answer)
    answer = [...answer]
    
    return answer;
}