function solution(triangle) {
    const l = triangle.length
    
    const dp = Array.from({length:l}, ()=>Array(l).fill(0))
    dp[0][0] = triangle[0][0]
    
    for(let i=1; i<l; i++) {
        for (let j=0; j<i+1; j++) {
            if (j===0) {
                dp[i][j] = Math.max(dp[i][j], dp[i-1][j] + triangle[i][j])
            } else if (j===i) {
                dp[i][j] = Math.max(dp[i][j], dp[i-1][j-1] + triangle[i][j])
            } else {
                dp[i][j] = Math.max(dp[i][j], dp[i-1][j] + triangle[i][j], dp[i-1][j-1] + triangle[i][j])
            }
        }
    }

    return Math.max(...dp[l-1]);
}