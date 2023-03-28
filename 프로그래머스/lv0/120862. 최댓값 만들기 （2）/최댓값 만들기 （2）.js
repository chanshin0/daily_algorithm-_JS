function solution(numbers) {
    const l = numbers.length
    
    const sortedNumbers = numbers.sort((a,b)=>a-b)
    const left = sortedNumbers[0] * sortedNumbers[1]
    const right = sortedNumbers[l-1] * sortedNumbers[l-2]

    return  Math.max(left, right);
}

// 1. 정렬후
// 2. 앞두개, 뒤두개의 최대값