function isAlpha(str) {
  return /^[A-Za-z]+$/.test(str);
}

function solution(str1, str2) {
    var answer = 0;
    const obj1 = {}
    const obj2 = {}

    for (let i=0; i<str1.length-1; i++){
        const checkStr = (str1[i]+str1[i+1]).toLowerCase()
        if (!isAlpha(checkStr)) continue

        if (obj1[checkStr]) obj1[checkStr] += 1
        else obj1[checkStr] = 1

    }
    for (let i=0; i<str2.length-1; i++){
        const checkStr = (str2[i]+str2[i+1]).toLowerCase()
        if (!isAlpha(checkStr)) continue

        if (obj2[checkStr]) obj2[checkStr] += 1
        else obj2[checkStr] = 1
    }    

    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    let shared = 0
    let sumSet = 0
    for (key of keys1){
        if (keys2.includes(key)){
            shared += Math.min(obj1[key], obj2[key])
            sumSet += Math.max(obj1[key], obj2[key])
        }
        else sumSet += obj1[key]
    }
    for (key2 of keys2){
        if (!keys1.includes(key2)) sumSet += obj2[key2]
    }

    if (shared===0 && sumSet===0) answer = 65536
    else answer = (shared/sumSet)*65536

    return Math.floor(answer);
}