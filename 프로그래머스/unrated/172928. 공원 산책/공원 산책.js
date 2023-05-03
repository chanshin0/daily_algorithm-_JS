const bfs = (i ,j, routes, park)=> {
    const delta = {
        N : [-1,0],
        S : [1,0],
        W : [0,-1],
        E : [0,1]
    }
    
    while(routes.length > 0) {
        const [op, n] = routes.shift().split(' ')
        let [di, dj] = delta[op]
        let flag = true
        
        for (let k=1; k <= +n; k++) {
            const [ni, nj] = [i + di * k, j + dj * k];
            
            if (!park[ni] || !park[ni][nj] || park[ni][nj] === 'X') {
                flag = false
                break
            }
        }
        
        if (flag) {
            i += di * +n
            j += dj * +n
        }
        // console.log([i, j], 33)
    }
    
    return [i, j]
}

function solution(park, routes) {
    var answer = [];
    const row = park.length;
    const col = park[0].length

    for (let i=0; i<row; i++) {
        for (let j=0; j<col; j++) {
            if (park[i][j]==='S') {
                return bfs(i, j, routes, park)
            }
        }
    }
}