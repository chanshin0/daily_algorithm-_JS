const isValid = (s) => {
    const arr = ['[]', '{}', '()']
    
    for (let i=0; i<s.length-1;) {
        const temp = s[i] + s[i+1]
        if (arr.includes(temp)) {
            s = s.substring(0, i) + s.substring(i+2, s.length)
            if (i!==0) i --
        }
        else {
            i ++
        }
    }
    
    return s? false : true
}

function solution(s) {
    var answer = 0;
    
    for (let i=-1; i<s.length-1; i++){
        s = s.substring(1, s.length+1) + s.substring(0, 1)
        // console.log(s)
        
        if (isValid(s)) answer ++
        
    }
    
    return answer;
}