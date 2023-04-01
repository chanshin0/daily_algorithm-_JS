function solution(quiz) {
    var answer = [];
    
    quiz.forEach((ele, idx)=>{
        const q = ele.split(' ')
        let correct;
              
        if (q[1]==='-'){
            correct = +q[0] - +q[2]
        }
        else if (q[1]==='+'){
            correct = +q[0] + +q[2]
        }
        
        if (correct==q[4]) answer.push("O")
        else answer.push("X")
    })
    
    
    return answer;
}