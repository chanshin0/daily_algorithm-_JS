function solution(s) {
    var answer = 0;
    
    s = s.split('')
    const l = s.length
    
    function recurr (i) {
        const std = s[i]
        if (!std) return 0

        let [x, y] = [0, 0]
        while (i<l) {
            s[i] === std ? x++ : y++
            
            if (x === y) {
                return recurr(i+1) + 1
            } else {
                i++
            }
        }
    
        return 1
    }
    answer = recurr(0)
    
    return answer;
}