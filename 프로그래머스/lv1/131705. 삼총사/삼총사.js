function solution(number) {
    var answer = 0;
    
    function comb (idx=0, arr=[]) {
        if (arr.length === 3) {
            const sum = arr.reduce((acc, curr)=>acc+curr, 0)
            if (sum === 0) answer ++
            return
        }
        
        for (let i=idx; i<number.length; i++) {
            const student = number[i]
            comb(i+1, [...arr, student])
        }
    }
    
    comb()
    
    return answer;
}

