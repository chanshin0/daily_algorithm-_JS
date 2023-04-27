function solution(s) {
    const l = s.length
    let minV = 1001
    // 엣지케이스
    if (s.length===1) return 1
    
    // 반복문 [1]. 1부터 l/2까지 각각 압축 문자열 구현하기.
    for (let i=1; i<=Math.floor(l/2); i++) {
        let cnt = 1         // 현재 문자열(item) 몇번이나 반복되었는지
        let prev;           // 비교 문자열
        let temp ='';       // 반환되는 압축 문자열
        
        // 반복문 [2]. s를 i길이씩 자르면서, prev랑 비교하기.
        for (let j=0; j<l; j+=i) {
            const item = s.slice(j, j+i) // 현재 슬라이스한 문자열
            
            // [2-1]. 맨 처음은 일단 prev에 저장해두고 continue; 
            if (j===0) prev = item
            else {
                // [2-2-1]. prev와 item이 같으면 cnt ++ 
                if (prev===item) {
                    cnt ++
                } else {
                    // [2-2-2]. prev와 item이 다르면, 압축가능한 문자열 있는지 확인 후, temp에 더함. 나머지 세팅 초기화.
                    cnt > 1 ? temp += String(cnt) + prev : temp += prev
                    prev = item
                    cnt = 1
                }
                // [2-3]. 맨 마지막 슬라이스일 때, 마지막으로 한번 더 비교 후, temp에 더해줌.
                if ((j+i) >= l) cnt > 1 ? temp += String(cnt) + item : temp += item
            }
        }
        // [3]. 압축 문자열 길이 최소값 갱신.
        minV = Math.min(minV, temp.length)
    }
    
    return minV;
}