function solution(land) {
    var answer = 0;
    const rowLen = land.length
    const colLen = land[0].length
    const visited = Array.from({length:rowLen}, ()=>Array.from({length:colLen}, (_)=>0))
    const obj = {}
    const amounts = Array(colLen).fill(0)
    
    // 전체 돌면서 석유 정보를 obj에 저장
    let num = 1
    land.forEach((row, r)=>{
        row.forEach((col, c)=>{
            if (col === 1 && visited[r][c] === 0) {
                const [amount, arr] = check(r,c)
                arr.forEach(v => amounts[v] += amount)
                num++
            }
        })
    })
    
    // console.log(amounts)
    
//     for (let j=0; j<colLen; j++) {
//         let num = -1;
//         let maxV = 0
//         for (let i=0; i<rowLen; i++) {
//             if (visited[i][j] === 0) continue
//             if (visited[i][j] === num) continue
            
//             num = visited[i][j]
//             maxV += obj[num]
//         }
        
//         answer = Math.max(answer, maxV)
//     }

    function check(i, j) {
        const delta = [[0,1],[1,0],[0,-1],[-1,0]]
        
        const set = new Set()
        let cnt = 1
        const que = [[i, j]]
        visited[i][j] = num
        while(que.length) {
            const [si, sj] = que.pop()
            set.add(sj)

            for (const [di, dj] of delta) {
                const [ni, nj] = [si+di, sj+dj]

                if (ni >= 0 && ni < rowLen && nj >= 0 && nj < colLen 
                    && visited[ni][nj] === 0 && land[ni][nj] === 1) {
                    visited[ni][nj] = num
                    que.push([ni, nj])
                    cnt++
                }
            }
        }
        
        return [cnt, Array.from(set)]
    }
    
    return Math.max(...amounts);
}


