function solution(board, moves) {
    var answer = 0;
    const L = board[0].length
    let stack = []

    moves.forEach((move, idx)=>{
        for (let i=0; i<L; i++) {
            const item = board[i][move-1]
            if (item){
                const l = stack.length
                if (stack[l-1]===item){
                    answer += 2
                    stack.pop()
                } else {
                    stack.push(item)
                }
                board[i][move-1] = 0
                break
            } 
        }
    })
    
    return answer;
}