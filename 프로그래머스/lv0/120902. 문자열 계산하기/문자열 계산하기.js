function solution(my_string) {
    let answer = 0;
    
    my_string = my_string.split(' ')
    
    for (let i=0; i<my_string.length; i++){
        if (my_string[i]==='+'){
            answer += +my_string[i+1]
            i ++
        } else if (my_string[i]==='-'){
            answer -= +my_string[i+1]
            i ++
        }
        else answer = +my_string[i]
    }
    
    return answer
}