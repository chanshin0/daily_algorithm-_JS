function solution(maps) {
    var answer = 0;
    const row = maps.length
    const col = maps[0].length
    const delta = [[0,1],[1,0],[0,-1],[-1,0]]
    
    let [s, e, l] = [[],[],[]]
    let cnt = 0
    for (let i=0; i<maps.length; i++){
        for (let j=0; j<maps[i].length; j++){
            switch (maps[i][j]) {
                case ('S') : s = [i,j]
                    break;
                case ('E') : e = [i,j]
                    break;
                case ('L') : l = [i,j]
                    break;
            }
        }
    }

    const bfs = (i, j, ti, tj) => {
        const visited = Array(row).fill(null).map(_=>Array(col).fill(0))
        visited[i][j] = 1
        const que = [[i, j]]

        while (que.length > 0) {
            const [si, sj] = que.shift()

            if (si===ti && sj===tj) return visited[si][sj] - 1

            for (const [di, dj] of delta) {
                const [ni, nj] = [si+di, sj+dj]
                if (maps[ni] && maps[ni][nj] && !visited[ni][nj] && maps[ni][nj]!=='X') {
                    que.push([ni,nj])
                    visited[ni][nj] = visited[si][sj] + 1
                }
            }
        }
    
        return false
    }
    
    const toLever = bfs(s[0], s[1], l[0], l[1])
    if (!toLever) return -1
    else answer += toLever
    
    const toExit = bfs(l[0], l[1], e[0], e[1])
    if (!toExit) return -1
    else answer += toExit
    
    return answer;
}