function solution(arr1, arr2) {
    var answer = [];
    const [r, c] = [arr1.length, arr1[0].length]
    
    for (let i=0; i<r; i++) {
        const col = []
        for (let j=0; j<arr2[0].length; j++) {
            let v = 0
            for (let k=0; k<c; k++) {
                v += arr1[i][k]*arr2[k][j]
            }
            col.push(v)
        }
        answer.push(col)
    }

    return answer;
}