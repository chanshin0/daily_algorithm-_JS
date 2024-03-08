function solution(n) {
    var answer = [[]];
    
    const arr = Array.from({length:n}, ()=>Array.from({length:n}, ()=>0))
    const delta =[[0,1],[1,0],[0,-1],[-1,0]] // 시계방향
    
    let [i, j, k, d] = [0, 0, 1, 0]   // 행,열,숫자k,delta인덱스
    
    while(k < n**2) {
        const [di, dj] = delta[d]
        const [ni, nj] = [i+di, j+dj]

        if (d === 0) {
            if (nj < n && arr[ni][nj] === 0) {
                arr[i][j] = k
                k += 1
                i = ni; j=nj 
            } else {
                d = (d+1)%4
            }
        } else if (d === 1) {
            if (ni < n && arr[ni][nj] === 0) {
                arr[i][j] = k
                k += 1
                i = ni; j=nj 
            } else {
                d = (d+1)%4
            }
        } else if (d === 2) {
            if (nj >= 0 && arr[ni][nj] === 0) {
                arr[i][j] = k
                k += 1
                i = ni; j=nj 
            } else {
                d = (d+1)%4
            }
        } else {
            if (ni >= 0 && arr[ni][nj] === 0) {
                arr[i][j] = k
                k += 1
                i = ni; j=nj 
            } else {
                d = (d+1)%4
            }
        }    
    }
    
    arr[i][j] = k
    
    return arr;
}