function solution(age) {
    var answer = '';
    const alphabets = ['a','b','c','d','e','f','g','h','i','j']
    const ageToStr = age.toString().split('')
    
    for (str of ageToStr){
        answer += alphabets[str]
    }
    return answer;
}