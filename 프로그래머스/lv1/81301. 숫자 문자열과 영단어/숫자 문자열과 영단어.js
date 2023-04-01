function solution(s) {
    var answer = '';

    const alphas = ["zero","one","two","three","four","five","six","seven","eight", "nine"]
    
    for (let i=0; i<s.length;){
        // [1]. 숫자 형태면 answer++, 컨티뉴
        if (!isNaN(s[i])){
            answer += s[i]     
            i ++
            continue
        } 
        
        // [2]. 숫자형태 아니면, 3~5길이 체크
        for (let j=3; j<=5; j++) {
            const compare = s.slice(i, i+j)
            
            const numCheck = alphas.indexOf(compare)
            if (numCheck !== -1){
                answer += numCheck.toString()
                i += j
            } 
            else continue;
            
        }
    }
    
    return +answer;
}