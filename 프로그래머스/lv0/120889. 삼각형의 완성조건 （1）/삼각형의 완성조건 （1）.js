function solution(sides) {
    var answer = 0;
    const sorted = sides.sort((a,b)=>a-b)
    const [a,b,c] = sorted
    
    return a+b > c? 1 : 2;
}