function solution(arrayA, arrayB) {
    const l = arrayA.length
    // arrayA.sort((a, b)=>a-b)
    // arrayB.sort((a, b)=>a-b)
    
    // 0. 어떤 arr 원소들의 공약수를 반환하는 함수
    function getCommonDivisor (arr) {
        const rst = []
        for (let i=2; i<=arr[l-1]; i++) {
            let flag = true // i가 arr 원소들의 공약수인가?
            for (let j=0; j<l; j++) {
                if (arr[j]%i === 0) continue
                flag = false
                break
            }
            if (flag) rst.push(i)
        }
        
        return rst
    }
    
    // 0-1. arrayA와 ArrayB의 공약수들의 배열 만들기. 이는 곧 a후보들의 배열이다.
    const entireDivisors = [...getCommonDivisor(arrayA), ...getCommonDivisor(arrayB)].sort((a,b)=>a-b)
    const L = entireDivisors.length
    // console.log(entireDivisors)
    
    // 1. 조건을 만족하는 a가 있는지 확인하는 함수
    function findA (targetN) {
        let flag = true // targetN은 a가 될 수 있는가?
        for (let i=0; i<l; i++) {
            const [odd1, odd2] = [arrayA[i]%targetN, arrayB[i]%targetN]
            if ((odd1 === 0 && odd2 !== 0) || (odd1 !== 0 && odd2 === 0)) continue
            flag = false
            break
        }
        
        return flag
    }

    // 2. 0-1에서 만든 배열을 순회하며 내림차순으로 순회하며, 조건을 만족하는지 확인하기
    let idx = L-1
    while (idx >= 0) {
        const now = entireDivisors[idx]
        if (findA(now)) return now
        idx --
    }
    
    return 0;
}