function solution(picks, minerals) {
    var answer = 0;
    const arr = ['diamond', 'iron', 'stone']
    const arr2 = [{
        diamond : 1,
        iron : 1,
        stone : 1
    }, {
        diamond : 5,
        iron : 1,
        stone : 1
    }, {
        diamond : 25,
        iron : 5,
        stone : 1
    }]
    const sum = picks.reduce((acc, curr)=>acc+curr)
    
    const stamina = (slice) => {
        const map = new Map()
        
        arr.forEach((ele,idx)=> {
            const 괭이 = ele

            for (let i=0; i<slice.length; i++) {
                const item = slice[i]
                if (!item) continue;
                map.set(괭이, (map.get(괭이)||0) + arr2[idx][item])
            }
        })
        
        return [...map.values()]
    }
    
    let cnt = 0
    let set = new Set()
    for (let i=0; i<minerals.length; i+=5) {
        if (cnt>=sum) break
        const item = minerals.slice(i, i+5)
        set.add(stamina(item))
        cnt ++
    }
    set = [...set].sort((a,b)=> (b[2]-a[2]) || (b[1]-a[1]) )
    // console.log(set)
    const visited = Array(set.length).fill(0)
    // console.log(visited)
    let idx = 0
    while (idx<3) {
        
        for (let i=0; i<set.length; i++) {
            if (visited[i]) continue
            
            const item = set[i]
            if (picks[idx]) {
                answer += item[idx]
                visited[i] = 1
                picks[idx] -= 1
            }
        }
        idx ++
    }
    
    return answer;
}