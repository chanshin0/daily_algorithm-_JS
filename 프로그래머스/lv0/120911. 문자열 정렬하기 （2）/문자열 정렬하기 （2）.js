function solution(my_string) {
    
    const toLowerCase = my_string.toLowerCase().split('')
    toLowerCase.sort()
    
    return toLowerCase.join('');
}

// 1. 배열로 만든 후, map 로우케이스
// 2. sort