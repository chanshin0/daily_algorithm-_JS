function solution(board) {
    let answer = 0
    const [row, col] = [board.length, board[0].length]
    
    const dp = Array.from({length:row}, (_, r)=> 
        Array.from({length:col}, (_, c)=> board[r][c] ? 1 : 0))
    
    for (let i=row-2; i>=0; i--) {
        for (let j=col-2; j>=0; j--) {
            if (dp[i][j]) {
                let minV = Math.min(dp[i+1][j], dp[i+1][j+1], dp[i][j+1])
                
                dp[i][j] = minV + 1
                answer = Math.max(answer, dp[i][j])
            }
        }
    }
    
    if (row === 1) {
        if (board[0].every(v=>v===0)) {
            return 0
        }
        return 1
    }
    
    return answer**2
}