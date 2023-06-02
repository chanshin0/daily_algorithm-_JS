function bfs(s, e, l, adjM) {
    if (s===e) return 0
    if (adjM[s][e]) return 1
    const cost = Array(l+1).fill(Infinity)
    cost[s] = 0
    
    const que = [s]
    while(que.length > 0) {
        const now = que.pop()
        if (now===e) break;
        
        for (let i=1; i<l; i++) {
            if (adjM[now][i] && cost[i] >= cost[now] + 1) {
                cost[i] = cost[now] + 1
                que.push(i)
            }
        }
    }
    
    // console.log(cost)
    return cost[e]===Infinity? -1 : cost[e]
}

function solution(n, roads, sources, destination) {
    var answer = [];
    
    const adjM = Array(n+1).fill().map(()=>Array(n+1).fill(0))
    // console.log(adjM)
    
    for (const road of roads) {
        const [s, e] = road
        adjM[s][e] = 1
        adjM[e][s] = 1
    }
    // console.log(adjM)
    
    for (const source of sources) {
        const rst = bfs(source, destination, n+1, adjM)
        answer.push(rst)
    }
    
    return answer;
}