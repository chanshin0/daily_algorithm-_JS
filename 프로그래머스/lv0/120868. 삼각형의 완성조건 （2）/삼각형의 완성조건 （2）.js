function solution(sides) {
    var answer = 0;
    sides.sort((a,b)=>a-b)

    // 1. sides[1]이 가장 긴 변일 떄
    for (let i=sides[1]-sides[0]+1; i<=sides[1]; i++){
        if (i+sides[0]>sides[1]) answer ++
    }
    // 2. sides의 두 변 모두 가장 긴 변이 아닐때
    for (let i=sides[1]+1; i<sides[0]+sides[1]; i++){
        answer ++
    }
    
    return answer;
}