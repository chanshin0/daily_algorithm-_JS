function solution(my_string) {
    let answer = 0;
    const stringArr = my_string.split(' ');
    
    if (!isNaN(stringArr[0])) {
        answer = +stringArr[0];
    }
    
    for (let i = 1; i < stringArr.length; i += 2) {
        if (isNaN(stringArr[i+1])) {
            continue;
        }
        if (stringArr[i] === '+') {
            answer += +stringArr[i+1];
        } else if (stringArr[i] === '-') {
            answer -= +stringArr[i+1];
        }
    }
    
    return answer;
}
