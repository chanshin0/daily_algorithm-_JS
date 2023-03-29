const dateValidator = (y,m,d, term)=>{
    y += Math.floor(term/12)
    m += term%12
    d -= 1
    
    if (m>12){
        y += Math.floor(m/12)
        m %= 12
    }
    
    if (d===0){
        d = 28
        m -= 1
        if (m===0){
            m = 12
            y -= 1
        }
    }

    return [y,m,d]
}


function solution(today, terms, privacies) {
    var answer = [];
    const parsedToday = today.split('.').map(ele=>parseInt(ele))
    
    const obj = {}
    for (term of terms){
        const [type, period] = term.split(' ');
        obj[type] = parseInt(period)
    }
    // console.log(obj)
    
    privacies.forEach((data,idx)=>{
        
        const [date, term] = data.split(' ');
        let [y,m,d] = date.split('.').map(ele=>parseInt(ele))
        
        const [year, month, day] = dateValidator(y,m,d,obj[term])
        console.log(year, month, day)
        const [compY, compM, compD] = parsedToday
        // console.log(compY, compM, compD)
        
        if (year>compY) return
        if (year===compY && month>compM) return
        if (year===compY && month===compM && day>=compD) return
        
        answer.push(idx+1)
    })
    return answer;
}




// Date A가 투데이B 기준 지났는지 계산하는 법.
// 1. 년이 작으면 트루
// 2-1. 년이 같고, 달이 작으면 트루
// 2-2. 년이 같고 달도 같으면,
// 1-2-1. 날짜가 작으면 트루