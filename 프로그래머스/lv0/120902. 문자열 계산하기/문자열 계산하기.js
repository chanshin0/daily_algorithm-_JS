function solution(my_string) {
    let answer = 0;
    
    my_string = my_string.split(' ')
    
    for (let i=0; i<my_string.length;){
        if (my_string[i]==='+'){
            answer += +my_string[i+1]
            i += 2
        } else if (my_string[i]==='-'){
            answer -= +my_string[i+1]
            i += 2
        }
        else{
            answer = +my_string[i]
            i ++
        } 
    }
    
    return answer
}

// 1. +나오면 뒷 숫자 더하기, i++해서 다음 반복문 스킵
// 2. -나오면 뒷 숫자 빼고, i++해서 다음 반복문 스킵