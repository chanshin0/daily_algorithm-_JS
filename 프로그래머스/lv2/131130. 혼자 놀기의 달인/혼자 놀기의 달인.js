function solution(cards) {
    var answer = [0];
    const l = cards.length
    const union = Array(l).fill(0)
    
    const uf = (n) => {
        n--;

        if (union[n]) return 0;
        union[n] = 1;

        return 1 + uf(cards[n])
    }
    
    cards.forEach((ele, idx)=>{
        if (!union[idx]) {
            const len = uf(ele)
            // console.log(len)
            answer.push(len)
        }
    })
    
    answer.sort((a,b)=>b-a)
    
    return answer[0]*answer[1];
}