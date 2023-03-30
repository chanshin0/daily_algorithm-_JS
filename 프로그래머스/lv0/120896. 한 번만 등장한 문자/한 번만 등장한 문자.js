function solution(s) {
    var answer = [];
    
    let obj = {}
    for (str of s){
        obj[str] = ++obj[str] || 1
    }
    
    obj = Object.entries(obj)
    for ([key, val] of obj){
        if (val===1) answer.push(key) 
    }
    answer = answer.sort().join('')
    
    return answer;
}