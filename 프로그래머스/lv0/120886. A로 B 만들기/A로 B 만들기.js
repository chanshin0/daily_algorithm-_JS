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
    // [2]
    for (key in beforeObj){
        if (afterObj.hasOwnProperty(key) && beforeObj[key]===afterObj[key]) continue
        else return 0
    }
    return 1
}