function solution(s, skip, index) {
    var answer = '';
    
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const l = alphabet.length
    const exclude = skip.split('')
    
    for (const char of s) {
        let char_idx = alphabet.indexOf(char)
        let cnt = index
        while(cnt) {
            char_idx = (char_idx+1)%l
            if (!exclude.includes(alphabet[char_idx])) {
                cnt--
            }
        }
        answer += alphabet[char_idx]
    }
    
    return answer;
}