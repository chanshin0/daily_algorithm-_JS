function bfs(s, l, adjL) {
    const cost = Array(l).fill(-1)
    cost[s] = 0

    const que = [s]
    while(que.length > 0) {
        const now = que.shift()
        
        adjL[now].forEach(n=>{
            if (cost[n]===-1) {
                cost[n] = cost[now] + 1
                que.push(n)
            }
        })
    }
    // console.log(cost)
    return cost
}

function solution(n, roads, sources, destination) {
    var answer = [];
    
    const adjL = Array(n+1).fill(null).map(_=>[])
    // console.log(adjL)
    
    for (const road of roads) {
        const [s, e] = road
        adjL[s].push(e)
        adjL[e].push(s)
    }
    
    const rst = bfs(destination, n+1, adjL)
    
    for (const source of sources) {
        answer.push(rst[source])
    }
    
    return answer;
}