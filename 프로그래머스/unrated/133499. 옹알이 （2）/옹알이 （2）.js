function solution(babbling) {
    var answer = 0;
    
    const char = {
        'aya' : 1,
        'ye' : 2,
        'woo' : 3,
        'ma' : 4
    }
    
    babbling.forEach((v, idx)=>{
        let flag = true
        let i = 0
        while (i < v.length) {
            const [two, three] = [v.slice(i, i+2), v.slice(i, i+3)]

            if (two.length === 2 && char[two] && v.slice(i-2, i) !== two) {
                i += 2
                continue
            } else if (three.length === 3 && char[three] && v.slice(i-3, i) !== three) {
                i += 3
                continue
            } 
            
            flag = false
            break
        }
        
        if (flag){
            answer ++
        } 
    })

    return answer;
}