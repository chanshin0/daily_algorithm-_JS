function solution(ingredient) {
    var answer = 0;
    const arr = {
        1:"빵",
        2:"야채",
        3:"고기"
    }
    
    const stack = []
    ingredient.forEach((v, idx)=>{
        if (v !== 1 || stack.length < 3) {
            stack.push(arr[v])
            return
        } 
        
        const check = stack.slice(stack.length-3).join('')
        if (check === '빵야채고기') {
            stack.pop()
            stack.pop()
            stack.pop()
            answer ++
        } else {
            stack.push(arr[v])
        }
    })
    
    return answer;
}


// 1. 빵일떄,
// 버거체크
// 버거면 i--
// 버거 아니면 i++