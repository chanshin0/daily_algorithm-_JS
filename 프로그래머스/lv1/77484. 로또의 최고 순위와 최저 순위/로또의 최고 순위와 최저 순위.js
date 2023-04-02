function solution(lottos, win_nums) {
    var answer = [];
    
    const lottoTable = {
        6:1,
        5:2,
        4:3,
        3:4,
        2:5,
        1:6,
        0:6
    }
    
    let zeroCnt = 0
    let cnt = 0
    
    lottos.forEach((ele, idx)=>{
        if (ele===0) zeroCnt ++
        else if (win_nums.includes(ele)) cnt ++
    })
    
    answer = [lottoTable[cnt+zeroCnt], lottoTable[cnt]]
    
    return answer;
}