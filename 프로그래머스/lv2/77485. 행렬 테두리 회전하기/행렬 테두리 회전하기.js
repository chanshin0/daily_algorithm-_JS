function solution(rows, columns, queries) {
    var answer = [];

    const arr = Array.from({length:rows}, (_, row)=> Array.from({length:columns}, (_, col)=>columns*row + col + 1))

    function rotate (x1,y1,x2,y2) {
        const nums = []
        
        let next = arr[x1][y1]
        let [i, j] = [x1, y1+1]
        while (j <= y2) {
            const temp = arr[i][j]
            arr[i][j] = next
            nums.push(next)
            next = temp
            j ++
        }
        j--
        i++
        while (i <= x2) {
            const temp = arr[i][j]
            arr[i][j] = next
            nums.push(next)
            next = temp
            i++
        }
        i--
        j--
        while(j >= y1) {
            const temp = arr[i][j]
            arr[i][j] = next
            nums.push(next)
            next = temp
            j--  
        }
        j++
        i--
        while(i >= x1) {
            const temp = arr[i][j]
            arr[i][j] = next
            nums.push(next)
            next = temp
            i-- 
        }
        
        return Math.min(...nums)
    }
    
    for (const [a,b,c,d] of queries) {
        answer.push(rotate(a-1,b-1,c-1,d-1))
    }
    
    return answer;
}