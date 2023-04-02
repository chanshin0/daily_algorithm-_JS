const toBinary = (n, N)=>{
    const rst = []
    
    while(n){
        rst.unshift(n%2)
        n = Math.floor(n/2)
    }
    
    while(rst.length<N){
        rst.unshift('0')
    }
    
    return rst.join('')
}

function solution(n, arr1, arr2) {
    var answer = [];
    
    for(let i=0; i<n; i++){
        // 1. arr1과 arr2의 숫자를 이진수(문자열)로 변환
        arr1[i] = toBinary(arr1[i], n)
        arr2[i] = toBinary(arr2[i], n)
        
        // 2. 변환된 문자열을 순회하면서 둘 다 0이면 공백, 나머지는 벽
        let answerEle = ''
        for(let j=0; j<n; j++){
            const ele1 = arr1[i][j]
            const ele2 = arr2[i][j]
            
            if (ele1==='0' && ele2==='0') answerEle += ' '
            else answerEle += '#'
        }
        answer.push(answerEle)
    }

    return answer;
}

// 1. arr1과 arr2를 각각 이진수로 전환
// 2. 0~N-1까지 인덱스로 for문 돌면서, 하나라도 벽이면 벽, 둘다 공백이면 공백.