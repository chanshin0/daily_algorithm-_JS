function solution(order) {
    var answer = 0;
    const claps = ['3','6','9']
    order = order.toString()
    
    for (str of order){
        if (claps.includes(str)) answer ++
    }
    
    return answer;
}

// 1. order를 순회하면서, 369에 포함되어있으면 카운트