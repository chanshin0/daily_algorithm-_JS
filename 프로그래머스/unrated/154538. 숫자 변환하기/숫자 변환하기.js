function solution(x, y, n) {
    const delta = {
        0: (a)=>a-n,
        1: (a)=>a/2,
        2: (a)=>a/3
    }

    const visited = Array(y+1).fill(0)
    
    const que = [[y,0]]
    visited[y] = 1
    
    while (que.length > 0) {
        const [now, cnt] = que.shift()
        
        if (now===x) return cnt
        
        for (const d in delta) {
            const next = delta[d](now)
            
            if (0<=next && next === Math.floor(next) && !visited[next]) {
                visited[next] = 1
                que.push([next, cnt+1])
            }
        }
    }
    
    return -1;
}