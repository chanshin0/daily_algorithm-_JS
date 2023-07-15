function solution(n) {
    var answer = '';
    const num = '124'
    
    let k = 1   // answer의 자릿 수
    while(true) {
        if (n - 3**k <= 0) {
            answer = '0'.repeat(k).split('')
            break
        }
        n -= 3**k++
    }
    
    for (let i=k-1; i>=0; i--) {
        if (n <= 3) {
            answer[i] = n-1
            break
        }
        
        n -= 3
        if (answer[i-1] && answer[i-1] < 2) answer[i-1] += 1
    }

    return answer.map(v=>num[+v]).join('');
}


// 1 2 4   l : 3
// 11 12 14 21 22 24 41 42 44 l : 3**2
// 111 112 114 121 122 124 141 1
