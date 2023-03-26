function solution(n, k) {
    var answer = 0;
    const service = Math.floor(n/10)
    k -= service
    answer = 12000*n + 2000*k
    return answer;
}

// 1. 서비스로 받은 음료수 계산 후
// 2. 음료수 개수에서 빼줌
// 3. 총액 계산