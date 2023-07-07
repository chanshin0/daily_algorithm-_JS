function solution(begin, end) {
    var answer = [];

    const biggestDivisor = (n) => {
    
        if (n <= 1) return 0;
        
        let [flag, num] = [false, 0]
        for (let i = 2; i <= Math.floor(n ** 0.5); i++) {
            if (n % i === 0) {
                if (n/i <= 10000000) return n/i;
                flag = true
                num = i
            } 
        }
        
        return flag ? num : 1
    }

    for (let i = begin; i <= end; i++) {
        const biggestDiv = biggestDivisor(i);
        answer.push(biggestDiv);
    }
    
    return answer;
}
