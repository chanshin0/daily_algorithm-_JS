function solution(before, after) {
    // [1]
    let beforeObj = {}
    let afterObj = {}
    
    for (let i=0; i<before.length; i++){
        const be = before[i]
        const af = after[i]
        if (beforeObj[be]) beforeObj[be] += 1
        else beforeObj[be] = 1
        if (afterObj[af]) afterObj[af] += 1
        else afterObj[af] = 1
    }
    console.log(beforeObj.size)
    // [2]
    for (key in beforeObj){
        if (afterObj.hasOwnProperty(key) && beforeObj[key]===afterObj[key]) continue
        else return 0
    }
    return 1
}

// 객체에 각각 저장
// [키, 밸류]를 원소로 갖는 배열로 만들어 비교.