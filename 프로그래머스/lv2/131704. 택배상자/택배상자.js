function solution(order) {
    // order.reverse()
    
    var answer = 0;
    const l = order.length
    
    let sub = Array(order[0]).fill(null).map((_,idx)=>idx+1)
    let box = order[0] + 1
    let idx = 0 // shift의 시간복잡도가 O(n)이기 때문에, 사용하지 않기 위해서 order배열의 idx로 계산함
    
    while (idx < l) {
        // console.log(order, box, sub, answer)
        if (box === order[idx]) {
            box++
            idx++
            answer++
        } else if (sub.at(-1) === order[idx]) {
            sub.pop()
            idx++
            answer ++
        } else {
            if (order[idx] < box) return answer
            sub.push(box)
            box++
        }
    }
    
    return answer;
}