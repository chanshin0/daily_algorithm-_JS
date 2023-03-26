function solution(my_string, n) {
    var answer = '';
    const l = my_string.length
    for (let i=0; i<l; i++){
        const item = my_string[i].repeat(n)
        answer += item
    
    }
    return answer;
}