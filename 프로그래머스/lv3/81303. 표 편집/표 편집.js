function solution(n, k, cmd) {
    var answer = '';
    
    const nodes = Array(n).fill(null).map((_, idx)=> 
    {
        return {
                id : idx,
                next : idx+1,
                deleted : false
            } 
    })
    console.log(nodes)
    
    const deleted = []
    
    function move (idx) {
        while (true) {
            if (!nodes[idx].deleted) return idx
            idx = nodes[idx].next
            if (idx >= n) return -1
        }
    }
    
    let idx = k     // 현재 선택된 idx
    for (const ele of cmd) {
        const [c, n] = ele.split(' ') 
        
        if (c === 'D') {
            idx -= +n
        } else if (c === 'C') {
            nodes[idx][deleted] = true

            deleted.push(idx)
        } else if (c === 'U') {
            idx += +n
        } else {
            nodes[deleted.shift()][deleted] = false
        }
    }
    console.log(nodes)
    
    return answer;
}