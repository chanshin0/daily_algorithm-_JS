function solution(want, number, discount) {
    var answer = 0;
    
    const obj = {}
    for (let i=0; i<want.length; i++) {
        const [w, n] = [want[i], number[i]]
        obj[w] = n
    }

    for (let j=0; j<discount.length-9; j++) {
        let item = discount[j]
        if (!obj[item]) continue
        
        let cart = {}
        let flag = true
        for (let i=j; i<j+10; i++) {
            item = discount[i]
            cart[item]? cart[item] += 1 : cart[item] = 1
            if (cart[item] > obj[item]||0) {
                flag= false
                break
            }
        }
        
        if (flag) {
            let newFlag = true
            for (const w of want) {
                if (obj[w] !== cart[w]) {
                    newFlag = false
                    break
                }
            }
            if (newFlag) answer ++
        }
    } 
    
    return answer;
}