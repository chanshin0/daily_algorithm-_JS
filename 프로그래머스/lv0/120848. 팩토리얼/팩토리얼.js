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