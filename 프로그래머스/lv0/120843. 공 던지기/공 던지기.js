function solution(numbers, k) {
    const l = numbers.length
    let cnt = 1
    let idx = 0
    while(cnt<k){
        idx = (idx+2)%l
        cnt ++
    }
    return idx+1;
}