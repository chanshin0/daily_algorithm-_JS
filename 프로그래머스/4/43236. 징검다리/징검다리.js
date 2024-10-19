function solution(distance, rocks, n) {
    var answer = 0;
    
    rocks = rocks.sort((a,b)=>a-b)
    rocks.push(distance)
    const len = rocks.length
    
    function binS(l, r) {
        while(l <= r) {
            const m = Math.floor((l+r) / 2)
            let cnt = 0
            let prev = 0;
            let flag = true;
            
            for (let i=0; i<len; i++) {
                const gap = rocks[i] - prev
                
                if (gap < m) {
                    cnt ++
                } else {
                    prev = rocks[i]
                }
                
                if (cnt > n) {
                    flag = false;
                    break;
                }
            }
            
            if (flag) {
                l = m + 1
            } else {
                r = m-1
            }
        }

        return l - 1
    }
    
    return binS(1, distance);
}

