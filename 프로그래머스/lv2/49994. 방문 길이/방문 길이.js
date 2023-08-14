function solution(dirs) {
    var answer = 0;
    
    const delta = {
        U : [1,0],
        D : [-1,0],
        R : [0,1],
        L : [0,-1]
    }
    
    const set = new Set()
    
    let [i, j] = [0, 0]
    dirs.split('').forEach(v=>{
        const [di, dj] = delta[v]
        const [ni, nj] = [i+di, j+dj]
        if (Math.abs(ni) <= 5 && Math.abs(nj) <= 5) {
            set.add([i,j,ni,nj].join(''))
            set.add([ni,nj,i,j].join(''))
            i = ni; j = nj
        }
    })
    
    return set.size/2;
}