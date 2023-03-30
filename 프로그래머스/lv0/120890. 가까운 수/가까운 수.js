function solution(array, n) {
    var answer = 0;
    array.sort((a,b)=>a-b)
    
    let minV = 100
    for (num of array){
        const dist = Math.abs(num-n)
        if (minV > dist){
            minV = dist
            answer = num
        }
    }
    return answer;
}