function solution(numbers, target) {
    var answer = 0;
    
    const l = numbers.length
    const delta = [1, -1]
    
    const dfs = (i, n)=>{
        
        if (i===l) {
            if (n===target) answer ++
            return
        }
        
        for (const di of delta) {
            dfs(i+1, n + numbers[i]*di)
        }
    }
    
    dfs(0, 0)
    return answer;
}