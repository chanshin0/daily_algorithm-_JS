function solution(n) {
    var answer = 0;
    
    while (n>0){
        answer += n%10
        n = Math.floor(n/10)
    }
    return answer;
}

// 1. string으로 바꾸고, 배열로 바꾼 뒤 합 구하기
// 2. 10으로 나누면서 합 구하기
// 2-1. n을 10으로 나눈 몫이 0이 될 때까지, 10으로 나눈 나머지를 더한다.