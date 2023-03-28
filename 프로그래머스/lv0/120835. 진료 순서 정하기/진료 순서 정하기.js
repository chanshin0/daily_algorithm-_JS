function solution(emergency) {
    const rank = new Array(emergency.length).fill(1)
    
    emergency.forEach((ele,idx)=>{
        emergency.forEach(compare=>{
            if (ele===compare);
            else if(ele<compare) rank[idx] ++
        })
    })
    
    return rank;
}

// 1. 정렬한 배열 생성
// 2. 원래 배열을 순회하며, 정렬한 배열의 인덱스+1을 answer에 푸쉬