function solution(stones, k) {
    var answer = 0;
    // let right = Math.max(...stones)
    // let left = Math.min(...stones)
    let right = stones[0];
    let left = stones[0];

    for (let i = 1; i < stones.length; i++) {
        right = Math.max(right, stones[i]);
        left = Math.min(left, stones[i]);
    }

    
    while (left <= right) {
        let mid = Math.floor((left+right)/2)
        let cnt = 0
        let flag = true
        
        for (let i=0; i<stones.length; i++) {
            const stone = stones[i]
            if (stone >= mid) cnt = 0
            else cnt ++

            if (cnt >= k) {
                flag = false
                break
            }
        }
        
        if (flag) {
            left = mid + 1
            answer = mid
        } else {
            right = mid - 1
        }
    }
    
    return answer

}