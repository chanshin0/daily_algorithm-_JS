function solution(scores) {
    const l = scores.length
    let ranking = 1
    const [w1, w2] = scores[0] // 완호 점수
    
    scores.sort((a,b)=>b[0]-a[0] || a[1]-b[1])
    let maxB = 0
    
    for (let i=0; i<l; i++) {
        const [s1, s2] = scores[i]
        
        if (s2 < maxB) {
            // maxB를 가진 직원은 현재 직원보다 두가지 점수 모두 높다는 뜻이니까, 현재 직원은 인센 못받는 직원임. 
            // 만약 그게 원호면 종료.
            if (s1===w1 && s2===w2) return -1
        } else {
            // 원호 랭킹 계산. maxB 갱신
            if (s1+s2 > w1+w2) ranking ++ 
            maxB = Math.max(maxB, s2)
        }
    }
    
    return ranking;
}