function solution(N, stages) {
    var answer = [];
    const totalCntArr = new Array(N+1).fill(0)
    const failedCntArr = new Array(N+1).fill(0)
    
    stages.forEach((stage, idx)=>{
        // [1]. 스테이지에 도달한 플레이어 수 카운트
        for (let i =1; i<=stage; i++){
            if (i<=N) totalCntArr[i] += 1
        }
        // [1-1]. 도달했으나 아직 클리어하지 못한 플레이어 수 카운트
        if (stage<=N) failedCntArr[stage] += 1
    })
    
    
    for (let i=1; i<=N; i++){
        // [2-1]. 실패율 계산
        let failed = failedCntArr[i] / totalCntArr[i]
        if (!failed) failed = 0  // 도달한 유저가 없는경우 실패율은 0
        // [2-2]. 실패율과 스테이지N를 담은 배열 answer에 푸쉬
        const temp = [failed*100, i]
        answer.push(temp)
    }
    
    // [3-1]. 정렬기준1 : 실패율 내림차순, 정렬기준2 : 인덱스 오름차순
    answer.sort((a,b)=>b[0]-a[0] || answer.indexOf(a[1])-answer.indexOf(b[1]))
    
    // [3-2]. 정렬된 배열의 스테이지N만 반환
    return answer.map(v=>v[1]);
}

// 길이가 N+1인 카운트 배열 만들어서 카운트