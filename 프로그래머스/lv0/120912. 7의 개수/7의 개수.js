function solution(array) {
    var answer = 0;
    
    for (ele of array){
        const strEle = ele.toString()
        for (str of strEle){
            if (str==='7') answer ++
        }
    }
    
    return answer;
}