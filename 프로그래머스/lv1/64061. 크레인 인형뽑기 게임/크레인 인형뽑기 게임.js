function solution(board, moves) {
    var answer = 0;
    const L = board[0].length
    let stack = []

    moves.forEach((move, idx)=>{
        for (let i=0; i<L; i++) {
            const item = board[i][move-1]
            if (item){
                stack.push(item)
                board[i][move-1] = 0
                
                const l = stack.length
                if (l>0 && stack[l-1]===stack[l-2]){
                    answer += 2
                    stack.pop()
                    stack.pop()
                }
                
                break
            } 
            
         
        }
    })
    
    return answer;
}