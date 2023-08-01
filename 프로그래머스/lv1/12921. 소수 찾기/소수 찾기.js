function solution(n) {

    const isPrime = Array(n+1).fill(true)
    isPrime[0] = false; isPrime[1] = false
    
    for (let i=2; i<=n; i++) {
        if (isPrime[i]) {
            for (let j=2; j<=~~(n/i); j++) {
                isPrime[i*j] = false
            }
        }
    }
    
    return isPrime.filter(v=>v===true).length;
}