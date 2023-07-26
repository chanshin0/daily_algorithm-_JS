function solution(number, limit, power) {
    var answer = 0;
    
    const yaksu = []
    for (let i=1; i<=number; i++) {
        const w = find(i)
        answer += w
    }
    
    function find (n) {
        let set = new Set()
        for (let i=1; i<=(n**0.5); i++) {
            if (n%i === 0) {
                set.add(i).add(n/i)
            }
            if (set.size > limit) return power
        }
        return set.size
    }
    
    return answer;
}