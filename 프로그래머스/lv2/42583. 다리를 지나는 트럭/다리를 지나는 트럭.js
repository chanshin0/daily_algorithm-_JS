function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    
    const done = []
    const bridge = []
    let cnt = 0
    let sum = bridge.reduce((acc, curr)=>acc+curr, 0)
    while (truck_weights.length > 0) {
        
        if (bridge.length === bridge_length) {
            const exit_t = bridge.shift()
            sum -= exit_t
        }
        
        const t = truck_weights.shift()

        if (sum + t <= weight) {
            bridge.push(t)
            sum += t
        } else {
            bridge.push(0)
            truck_weights.unshift(t)
        }
        cnt ++
    }
    
    while (bridge.length < bridge_length) {
        bridge.unshift(0)
    }
    
    while (sum > 0) {
        const t = bridge.shift()
        sum -= t
        cnt ++
    }
    
    return cnt;
}

// 1. 트럭 입장
// 2. 다리가 꽉차지 않았을 때
// 2-1. 무게 초과하지 않는다면, 다음 트럭 입장
// 2-2. 무게가 초과한다면, 입장한 트럭들 한칸씩 이동
// 2-2-1. 다리를 다건넌 트럭은 shift


// 7546

// 1 7
// 2 70
// 3 04
// 4 45
// 5 50
// 6 06
// 7 60
// 8 0