function solution(n) {
    
    const arr = Array(100000).fill(0)
    arr[1] = 1
    
    let i = 2
    while(i <= n) {
        arr[i] = (arr[i-1] + arr[i-2]) % 1234567
        i++
    }
    
    return arr[n] 
}