function solution(n, k) {
    function factorial(num) {
        if (num === 0) return 1;
        return num * factorial(num - 1);
    }
    
    let answer = [];
    let numbers = Array.from({length: n}, (_, i) => i + 1);
    
    while (n > 0) {
        let fact = factorial(n - 1);
        let index = Math.floor((k - 1) / fact);
        
        answer.push(numbers[index]);
        numbers.splice(index, 1);  // 사용한 숫자 제거
        
        k -= index * fact;
        n--;
    }
    
    return answer;
}
