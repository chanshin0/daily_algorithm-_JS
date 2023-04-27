function solution(s) {
    const l = s.length
    let minV = 1001
    if (s.length===1) return 1
    
    for (let i=1; i<=Math.floor(l/2); i++) {
        
        let cnt = 1
        let prev; 
        let temp ='';
        for (let j=0; j<l; j+= i) {
            const item = s.slice(j, j+i)
     
            if (j===0) prev = item
            else {
                if (prev===item) {
                    cnt ++
                } else {
                    cnt > 1 ? temp += String(cnt) + prev : temp += prev
                    prev = item
                    cnt = 1
                }
                if ((j+i) >= l) cnt > 1 ? temp += String(cnt) + item : temp += item
            }
            // console.log(prev, item)
        }
        minV = Math.min(minV, temp.length)
    }
    
    
    return minV;
}