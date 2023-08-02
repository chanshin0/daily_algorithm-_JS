function solution(r1, r2) {
    var answer = 0;
    
    for (let x=1; x<=r2; x++) {
        const R2 = Math.floor((r2**2 - x**2)**0.5)  // 큰 원의 좌표는 내림
        const R1 = Math.ceil((r1**2 - x**2)**0.5) || 0   // 작은 원의 좌표는 올림
        // console.log(x, R2, R1)
        
        answer += R2-R1+1
    }
    
    return answer*4;
}