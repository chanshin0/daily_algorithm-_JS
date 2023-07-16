function solution(n, lost, reserve) {
    const check = Array(n+1).fill(0)
    
    for (const l of lost) {
        check[l] = 1
    }
    
    reserve.sort((a,b)=>a-b)
    for (const stud of reserve) {
        if (lost.includes(stud)) {
            check[stud] = 0
            continue
        }
        
        if (check[stud-1] && check[stud-1] === 1) {
            check[stud-1] = 0
            continue
        }
        if (check[stud+1] && check[stud+1] === 1) {
            check[stud+1] = 0
            continue
        }
    }
    
    return check.slice(1).reduce((acc, curr)=>curr===0? acc+1 : acc, 0);
}