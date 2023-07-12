function solution(n, k, cmd) {
    const nodes = Array.from({length:n}, (_, idx)=>{
        return {
            prev : idx===0? 'head' : idx-1,
            next : idx===n-1? 'tail' : idx+1,
            deleted : false
        }
    })

    const deleted = []
    
    let idx = k     // 현재 선택된 idx
    for (const ele of cmd) {
        const [c, num] = ele.split(' ') 
        
        if (c === 'D') {
            // 1. 행 이동(next)
            idx = move(idx, +num, "next")
        } else if (c === 'C') {
            // 2. 행 삭제
            nodes[idx]["deleted"] = true
            deleted.push(idx)
            
            // 2-1. 삭제 후, 바로 이전 항의 next === 이번에 삭제한 행의 next
            const myPrev = move(idx, 1, "prev")
            if (myPrev !== -1) {
                nodes[myPrev]['next'] = nodes[idx]['next'];
            }
            // 2-2. 삭제 후, 바로 다음 항의 prev === 이번에 삭제한 행의 prev 
            const myNext = move(idx, 1, "next")
            if (myNext !== -1) {
                nodes[myNext]['prev'] = nodes[idx]['prev'];
            }
            
            // 2-3. 삭제 후, 선택된 행은 D 1, 만약 tail행이면 U 1.
            idx = myNext === -1 ? move(deleted.at(-1), 1, "prev") : myNext
        } else if (c === 'U') {
            // 3. 행 이동(prev)
            idx = move(idx, +num, "prev")
        } else {
            // 4. 행 복구
            let recovered = deleted.pop();
            nodes[recovered]["deleted"] = false
            
            // 4-1. 복구 후, 바로 이전 항의 next === 이번에 복구한 행.
            const myPrev = move(recovered, 1, "prev")
            if (myPrev !== -1) {
                nodes[myPrev]['next'] = recovered;
            }
            // 4-2. 복구 후, 바로 다음 항의 prev === 이번에 복구한 행.
            const myNext = move(recovered, 1, "next")
            if (myNext !== -1) {
                nodes[myNext]['prev'] = recovered;
            }
        }
    }
    // 재귀는 콜스택 초과남..
    function move (idx, cnt, cmd) {
        if (cnt === 0) return idx

        const target = nodes[idx][cmd]
        
        if (target === 'tail' || target === 'head') return -1

        return !nodes[target]["deleted"]? move(target, --cnt, cmd) : move(target, cnt, cmd) 
    }
    
    // 연결리스트를 이용해서 prev노드와 next노드의 idx를 계산하는 함수
    function move (idx, cnt, cmd) {
        while (cnt) {
            const target = nodes[idx][cmd]
            if (target === 'tail' || target === 'head') return -1
            if (!nodes[target]["deleted"]) cnt --
            idx = target
        }
        return idx
    }
    
    return nodes.map(v=>v["deleted"]? "X" : "O").join('');
}
