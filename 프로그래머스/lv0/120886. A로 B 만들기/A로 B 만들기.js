function solution(before, after) {
    const obj = {};
    for(let i = 0; i < before.length; i++){
        obj[before[i]] = obj[before[i]] ? obj[before[i]] + 1 : 1;
    }
    for(let i = 0; i < after.length; i++){
        console.log(obj[after[i]])
        if(!obj[after[i]]) return 0;
        else obj[after[i]]--;
    }
    return 1;
}