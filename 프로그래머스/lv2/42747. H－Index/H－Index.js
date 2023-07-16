function solution(citations) {
    let answer = 0
    
    const l = citations.length
    citations.sort((a,b)=>a-b)
    
    let [left, right] = [0, citations[l-1]]
    while (left <= right) {
        const target = ~~((left+right)/2)
        
        const overTarget = citations.reduce((acc,curr)=>{
            if (curr >= target) return acc+1
            return acc
        }, 0)
        
        if (overTarget >= target) {
            answer = target
            left = target+1
        } else {
            right = target-1
        }
    }

    return answer
}