function solution(k, m, score) {
    var answer = 0;
    
    let box = []
    const que = [...score].sort((a,b)=>a-b)
    while (que.length > 0) {
        while (box.length < m && que.length > 0) {
            box.push(que.pop())
        }
        
        if (box.length === m) {
            answer += box.at(-1)*m
            box = []
        } else {
            break
        }
    }
    
    return answer;
}