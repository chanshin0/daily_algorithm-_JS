function solution(board) {
    var answer = 0;
    const [row, col] = [board.length, board[0].length]
    
    const visited = Array.from({length:row}, ()=>Array(col).fill(row*col))
    const delta = [[0,1],[1,0],[0,-1],[-1,0]]
    
    board.forEach((row, i)=>{
        row.split('').forEach((col, j)=>{
            if (col === 'R') {
                answer = bfs(i, j)
            }
        })
    })
    
    function bfs(i, j) {
        visited[i][j] = 0
        
        const que = [[i, j]]
        while (que.length > 0) {
            const [si, sj] = que.shift()
            
            if (board[si][sj] === 'G') return visited[si][sj]
            
            for (const [di, dj] of delta) {
                let [ni, nj] = [si, sj]
                if (!board[ni] || !board[ni][nj] || board[ni][nj] === 'D') continue
                
                while (board[ni+di] && board[ni+di][nj+dj] && board[ni+di][nj+dj] !== 'D') {
                    ni += di
                    nj += dj
                }
                
                if (visited[ni][nj] > visited[si][sj] + 1) {
                    visited[ni][nj] = visited[si][sj] + 1
                    que.push([ni, nj])
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

// 한번에 여러칸을 움직일 수 있기 때문에, 맨 처음 도달하는 횟수가 반드시 최소횟수를 보장하지 않는다.