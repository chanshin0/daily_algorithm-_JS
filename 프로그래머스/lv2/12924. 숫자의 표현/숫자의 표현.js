function solution(n) {
    var answer = 1;
    const half = Math.floor(n/2)
    const arr = Array(n+1).fill(0)
    
    if (n === 1) return 1
    if (n === 2) return 1
    
    for (let i=1; i<=half+1; i++) {
        arr[i] = i+arr[i-1]

        if (arr[i] === n) answer ++
        if (arr[i] > n) {
            for (let j=i-1; j>0; j--) {
                const diff = arr[i]-arr[j]
                if (diff === n) answer ++
                if (diff > n) break
            }
        }
    }

    return answer;
}