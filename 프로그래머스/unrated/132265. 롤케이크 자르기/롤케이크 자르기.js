function solution(topping) {
    var answer = 0;
    const l = topping.length
    
    for (let i=0; i<l; i++) {
        const setA = new Set(topping.slice(0, i+1))
        const setB = new Set(topping.slice(i+1, l))
        // console.log(setA, setB)
        if (setA.size === setB.size) {
            answer ++
        }
    }
    
    return answer;
}