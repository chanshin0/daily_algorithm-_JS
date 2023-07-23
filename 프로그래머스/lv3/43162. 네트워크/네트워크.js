function solution(n, computers) {
    var answer = 0;
    const visited = Array(n).fill(0)
    
    for (let com=0; com<n; com++) {
        if (!visited[com]) {
            answer ++
            dfs(com)
        }
    }
    
    function dfs (s) {
        visited[s] = 1
        
        computers[s].forEach((node, idx)=>{
            if (node && !visited[idx]) {
                dfs(idx)
            }
        })
    }
    
    return answer;
}