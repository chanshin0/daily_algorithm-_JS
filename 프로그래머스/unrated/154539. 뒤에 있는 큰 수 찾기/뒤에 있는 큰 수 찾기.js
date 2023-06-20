function solution(numbers) {
    var answer = [];
    const l = numbers.length
    
    // 뒤에서부터 순회하면서,
    // stack이 비었으면 -1푸쉬, 스택 맨 앞이 현재보다 크면 push, 작으면 stack pop
    const stack = []
    for (let i=l-1; i>=0; i--) {
        const num = numbers[i]
        
        let idx = stack.length-1
        while (stack[idx] && stack[idx] <= num) {
            stack.pop()
            idx--
        }
        
        if (stack[idx]) {
            answer.push(stack[idx])
        } else {
            answer.push(-1)
        }
        
        stack.push(num)
    }
    
    
    return answer.reverse();
}
