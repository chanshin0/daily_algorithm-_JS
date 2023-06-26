function solution(cards) {
    var answer = [0];
    const l = cards.length
    const union = Array(l).fill(0)
    
    const uf = (n) => {
        n--;

        if (union[n]) return [];
        union[n] = 1;

        return [cards[n], ...uf(cards[n])];
    }
    
    cards.forEach((ele, idx)=>{
        if (!union[idx]) {
            const len = uf(ele)
            // console.log(len)
            answer.push(len.length)
        }
    })
    
    answer.sort((a,b)=>b-a)
    
    return answer[0]*answer[1];
}