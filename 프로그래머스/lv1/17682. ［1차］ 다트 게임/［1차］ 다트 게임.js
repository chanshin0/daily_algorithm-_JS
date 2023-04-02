function solution(dartResult) {
    var answer = [];
    
    const sdt = [0, "S", "D", "T"]   
    const options = ['*', '#']
    
    let tempNum=''          // 점수가 10인 경우 고려해, 숫자를 저장하는 변수
    let tempScore = 0;      // 옵션계산하기전 점수를 저장하는 변수
    for (let i=0; i<dartResult.length; i++){
        const now = dartResult[i]
        
        // [1]. now가 점수일 때
        if (!isNaN(now)){
            // 1-1. tempNum에 저장
            tempNum += now
            // 1-2. tempScore가 계산되어 있다면 answer에 푸쉬 후, 0으로 다시 초기화
            if(tempScore) answer.push(tempScore)
            tempScore = 0
        } 
        
        // [2]. now가 보너스일 때
        let score;
        if (sdt.includes(now)){
            // 2-1 . tempNum 숫자로 변환해서 score 계산후, tempScore에 저장하고, tempNum초기화
            score = parseInt(tempNum) ** sdt.indexOf(now)
            tempScore = score
            tempNum = ''
        }
        
        // [3]. now가 옵션일 때
        if (options.includes(now)){
            if (now==='*'){
                tempScore *= 2
                if (answer.length>0) answer[answer.length-1] *= 2
            }
            else if (now==='#'){
                tempScore *= -1
            }
        }
        // console.log(i, 'tempNum : ', tempNum, 'tempScore : ', tempScore, answer)
    }
    
    // [4]. 3번째 세트의 결과가 tempScore에 남아있기 때문에 푸쉬
    if (tempScore) answer.push(tempScore)
    
    return answer.reduce((acc, curr)=>acc+curr, 0);
}