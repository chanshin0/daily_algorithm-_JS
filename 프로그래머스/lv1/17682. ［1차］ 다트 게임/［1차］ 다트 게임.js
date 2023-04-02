function solution(dartResult) {
    var answer = [];
    
    const sdt = [0, "S", "D", "T"]   
    const options = ['*', '#']
    
    let tempNum=''
    let tempScore = 0;
    for (let i=0; i<dartResult.length; i++){
        const now = dartResult[i]
        if (!isNaN(now)){
            tempNum += now
            if(tempScore) answer.push(tempScore)
            tempScore = 0
        } 
        
        let score;
        if (sdt.includes(now)){
            score = parseInt(tempNum) ** sdt.indexOf(now)
            tempNum = ''
            tempScore = score
        }
        
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
    
    if (tempScore) answer.push(tempScore)
    
    return answer.reduce((acc, curr)=>acc+curr, 0);
}