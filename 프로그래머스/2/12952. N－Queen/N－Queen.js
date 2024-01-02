function solution(n) {
    var answer = 0;
    const visited = Array.from({length:n}, ()=>-1)
    
    function dfs(i, q) {
        // 종료조건
        if (i === n) {
            if (q === n) answer ++
            return
        }
        
        for (let y=0; y<n; y++) {
            if(!isSafe(i, y)) continue

            visited[i] = y
            dfs(i+1, q+1)
            visited[i] = -1
        }
        
        return
    }
    
    function isSafe(i, j) {
        for (let row=0; row<n; row++) {
            const col = visited[row]
            if (col === -1) continue
            if (col === j) return false
            if (Math.abs(row-i) === Math.abs(col-j)) return false
        }
        return true
    }
    
    dfs(0, 0, 0)
    
    return answer;
}