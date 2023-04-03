function isAlphaNumeric(str) {
  return /^[A-Za-z0-9]+$/.test(str);
}

function solution(new_id) {
    var answer = '';
    const specials = ['-','_','.']
    
    // 1.
    new_id = new_id.toLowerCase()
    new_id = new_id.split('')
    
    
    new_id.forEach((str, idx)=>{
        if (isAlphaNumeric(str)){
            answer += str
            return
        } 
        
        // 2.
        if (!specials.includes(str)){
            return
        } 
        
        // 3.
        if (str==='.'){
            if (answer[answer.length-1]==='.') return
            // 4.
            else if (idx===0 || idx===new_id.length-1 || new_id[idx-1]==='.') return
            else answer += str
            return
        }
        
        // 5.
        if (str===''){
            answer += 'a'
            return
        } 
        
        answer += str
    })
    
    answer = answer.split('')
    while(true){
        const st = answer[0]
        const end = answer[answer.length-1]
        if (st==='.') answer.shift()
        if (end==='.') answer.pop()
        if (st!=='.' && end!=='.') break
    }
    // console.log( answer)
    
    // 6.
    if (answer.length>=16) answer = answer.slice(0, 15)
    while(answer[answer.length-1]==='.'){
        answer.pop()
    }
    // console.log(answer)
    if (answer.length===0) answer = ['a']
    
    // 7.
    while (answer.length <= 2){
        answer.push(answer[answer.length-1])
    }
    // console.log(answer)
    
    return answer.join('');
}