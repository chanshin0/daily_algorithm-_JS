function solution(arr) {
    var answer = [0, 0];
    const l = arr.length
    
    function compress(i1, j1, i2, j2, len){
        const mid = Math.floor((i2-i1)/2)
        if (len < 1) return
        
        let sum = 0
        for (let row=i1; row<i2; row++) {
            for (let col=j1; col<j2; col++) {
                sum += arr[row][col]  
            }
        }
        
        // console.log(i1,j1,i2,j2, 'len : ',len, 'sum : ',sum, mid)
        
        if (sum === 0 ) {
            answer[0] += 1
        } else if (sum === (len)**2) {
            answer[1] += 1
        } else {
            compress(i1,j1, i1+mid,j1+mid, len/2)
            compress(i1,j1+mid, i1+mid,j1+mid+mid, len/2)
            compress(i1+mid,j1, i1+mid+mid,j1+mid, len/2)
            compress(i1+mid,j1+mid, i2,j2, len/2)
        }
    }
    compress(0,0,l,l, l)
    
    return answer;
}