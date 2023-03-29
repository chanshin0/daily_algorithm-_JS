const factorial = (n)=>{
    if (n<=1) return 1
    else return n*factorial(n-1)
}

const memo = []
for (let i=1; i<=10; i++){
    const facto = factorial(i)
    memo.push(facto)
}

function solution(n) {
    
    for (let i=0; i<=9; i++){
        if (memo[i]>n) return i 
        else if (memo[i]===n) return i+1
    }
    
}

// 배열 만들어놓고
// 1! 부터 차례로 푸쉬하는데,
// n보다 작으면 푸쉬, n보다 크면 이전값 반환하고 종료