function solution(s) {
    const l = s.length
    
    function recurr (i) {
        // 첫 글자가 기준. std
        const std = s[i]
        if (!std) return 0  // 종료조건[1]. i가 인덱스 초과해서 std가 undefined라면 리턴 0

        let [x, y] = [0, 0]
        while (i<l) {
            s[i] === std ? x++ : y++
            
            // 종료조건[2]. x y 카운트가 같아지면, 분리한 문자열(1개) + recurr(i+1)
            if (x === y) {
                return 1 + recurr(i+1) 
            } else {
                i++
            }
        }
    
        // 종료조건[3]. 2번에서 종료되지 못하고 여기까지 내려왔다면 모든 문자열을 순회할 때까지 x y 횟수가 같아지지 않았다는              것이다. 지금까지 읽은 문자열 분리하고(1개) 리턴
        return 1    
    }
    
    return recurr(0)
}