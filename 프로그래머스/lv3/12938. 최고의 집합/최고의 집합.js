function solution(n, s) {

    if (s < n) return [-1]
    
    const num = Math.floor(s/n)
    const rest = s%n
    const arr = Array(n).fill(num)
    
    let idx = 0
    for (let i=0; i<rest; i++) {
        arr[idx] += 1
        idx = (idx+1)%n
    }
    // console.log(arr)
    return arr.reverse();
}