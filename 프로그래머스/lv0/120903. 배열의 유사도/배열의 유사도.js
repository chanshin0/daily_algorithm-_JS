function solution(s1, s2) {
    var answer = 0;
    // s1.forEach(ele=>{
    //     if (s2.includes(ele)) answer ++
    // })
    
    const wholeNumbers = [...s1,...s2]
    const setNumbers = new Set(wholeNumbers)
    answer = wholeNumbers.length - [...setNumbers].length
    return answer;
}