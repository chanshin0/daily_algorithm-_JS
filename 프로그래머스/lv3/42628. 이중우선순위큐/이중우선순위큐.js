function solution(operations) {
    const que = []
    for (const op of operations) {
        const [m, n] = op.split(' ')
        
        if (m === 'I') {
            que.push(+n)
            que.sort((a,b)=>a-b)
        } else {
            if (que.length === 0) continue
            
            if (n === '1') {
                que.pop()    
            } else {
                que.shift()
            }
        }
    }

    const l = que.length
    
    return l === 0 ? [0,0] : [que[l-1], que[0]];
}