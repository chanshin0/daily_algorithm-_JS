function solution(n) {
    var answer = 0;
    
    const temp = n.toString(3).split('').reverse()
        .join('')

    return parseInt(temp, 3)
}