function solution(k, ranges) {
    const answer = []
    const seq = []
    const area = [] 
    
    function collatz(n) {
        if (seq.length > 0) area.push((seq.at(-1)+n)/2)

        seq.push(n)
        if (n <= 1) return n
        
        if (n%2 === 0) collatz(Math.floor(n/2))
        else collatz(n*3+1)
    }
    collatz(k)
    
    const l = area.length
    ranges.forEach(range=>{
        const [s, e] = range
        if (l+e < s) {
            answer.push(-1)
        } else {
            const sum = [...area].slice(s, l+e).reduce((acc,curr)=>acc+curr, 0)
            answer.push(sum)
        }
    })   
    console.log(answer)
    return answer;
}