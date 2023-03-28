function solution(numbers, direction) {
    
    if (direction==='right'){
        const lastNum = numbers.pop()
        numbers.unshift(lastNum)
    } else {
        const firstNum = numbers.shift()
        numbers.push(firstNum)
    }
    
    return numbers;
}

// 1. right이면, -1번쨰 원소가 1번쨰로
// 2. left이면, 1번째 원소가 -1번째로