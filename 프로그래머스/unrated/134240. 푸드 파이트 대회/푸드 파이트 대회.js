function solution(food) {
    let left = ''
    
    food.forEach((f, idx)=>{
        f = f%2 ? f-1 : f
        f /= 2
        
        left += (idx+'').repeat(f)
    })
    
    
    return left + '0' + [...left].reverse().join('');
}