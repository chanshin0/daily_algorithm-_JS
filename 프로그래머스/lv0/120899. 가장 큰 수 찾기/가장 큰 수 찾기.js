function solution(array) {
    
    const maxV = Math.max(...array)
    const idx = array.indexOf(maxV)
    
    return [maxV, idx];
}