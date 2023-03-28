function solution(my_string, num1, num2) {
    var answer = '';
    const temp = my_string[num1]
    const temp2 = my_string[num2]
    
    for (let i=0; i<my_string.length; i++){
        if (i===num1) answer += temp2
        else if (i===num2) answer += temp
        else answer += my_string[i]
    }   
    
    return answer;
}