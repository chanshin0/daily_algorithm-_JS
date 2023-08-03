function solution(board) {
    var answer = 0;
    const [row, col] = [board.length, board[0].length]
    
    const visited = Array.from({length:row}, ()=>Array(col).fill(0))
    const delta = [[0,1],[1,0],[0,-1],[-1,0]]
    
    board.forEach((row, i)=>{
        row.split('').forEach((col, j)=>{
            if (col === 'R') {
                answer = bfs(i, j)
            }
        })
    })
    
    function bfs(i, j) {
        visited[i][j] = 1
        
        const que = [[i, j, 0]]
        while (que.length > 0) {
            const [si, sj, cnt] = que.shift()
            
            if (board[si][sj] === 'G') return cnt
            
            for (const [di, dj] of delta) {
                let [ni, nj] = [si+di, sj+dj]
                if (!board[ni] || !board[ni][nj] || board[ni][nj] === 'D') {
                    continue
                }
                
                while (board[ni] && board[ni][nj] && board[ni][nj] !== 'D') {
                    ni += di
                    nj += dj
                }
                
                ni -= di; 
                nj -= dj;
                if (!visited[ni][nj]) {
                    visited[ni][nj] = 1
                    que.push([ni, nj, cnt+1])
                    // console.log('start : ', si, sj)
                    // console.log('arrive :', ni, nj)
                    // console.log('que :', que)
                }
            }
        }
        
        return -1;
    }
    
    return answer
}