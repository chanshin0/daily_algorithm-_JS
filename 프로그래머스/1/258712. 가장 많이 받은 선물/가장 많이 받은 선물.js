function solution(friends, gifts) {
    var answer = 0;

    // 2차원 배열 초기화
    const row = friends.length
    const thisMonth = Array.from({length:row}, () => Array.from({length:row}, ()=>0))
    
    // 선물 주고 받은 횟수 저장
    gifts.forEach((gift, idx)=>{
        const [f, t] = gift.split(" ").map(v=>friends.indexOf(v))
    
        thisMonth[f][t] += 1
    })
    
    // 다음달에 받을 선물 개수 저장할 배열 초기화
    const nextMonth = Array(row).fill(0)
    
    // 2차원 배열 순회하며 다음달에 받을 선물 계산
    for (let i=0; i<row; i++) {
        for (let j=i+1; j<row; j++) {
            const [iToj, jToi] = [thisMonth[i][j], thisMonth[j][i]]

            // 두 사람이 선물을 주고받은 기록이 하나도 없거나 주고받은 수가 같다면
            if ((iToj + jToi === 0) || (iToj === jToi)) {
                if (getGiftScore(i) > getGiftScore(j)) {
                    nextMonth[i] += 1
                } else if (getGiftScore(i) < getGiftScore(j)) {
                    nextMonth[j] += 1
                }
                
            //두 사람이 선물을 주고받은 기록이 있다면,
            } else {
                if (thisMonth[i][j] > thisMonth[j][i]) {
                    nextMonth[i] += 1
                } else if (thisMonth[i][j] < thisMonth[j][i]) {
                    nextMonth[j] += 1
                }
            }
        }
    }
    
    function getGiftScore(i) {
        const give = getSum(thisMonth[i])
        const receive = getColSum(i)
        return give - receive
    }
    
    function getSum(arr) {
        const copy = arr
        return copy.reduce((acc, curr)=>acc+curr,0)
    }
    
    function getColSum(i) {
        const copy = thisMonth
        return copy.reduce((acc, curr)=>acc+curr[i],0)
    }
    
    return Math.max(...nextMonth);
}