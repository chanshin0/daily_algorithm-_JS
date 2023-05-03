function solution(maps) {
    maps = maps.map(map=>map.split('').map(v=>{if(v!=='X') return +v}))
    
    var answer = [];
    const row = maps.length
    const col = maps[0].length
    const visited = []
    const arr = Array(col).fill(0)
    for (let i=0; i<row; i++) {
        visited.push([...arr])
    }
    const delta = [[0,1],[0,-1],[1,0],[-1,0]]
    
    function dfs(i, j, cnt){
        visited[i][j] = 1

        let flag = false
        for (let k=0; k<4; k++) {
            const [di, dj] = delta[k]
            const [ni, nj] = [i+di, j+dj]

            if (maps[ni] && maps[ni][nj] && !visited[ni][nj]) {
                flag = true
                cnt = dfs(ni, nj, cnt+maps[ni][nj])
            }
        }
        return cnt
    }
    
    for (let i=0; i<row; i++) {
        const map = maps[i]
        for(let j=0; j<col; j++){
            if (map[j] && !visited[i][j]) {
                const rst = dfs(i, j, map[j])
                answer.push(rst)
            }
        }
    }
    
    return answer.length===0? [-1] : answer.sort((a,b)=>a-b);
}