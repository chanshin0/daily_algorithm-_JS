const makeMatrix = ()=>{
    const arr = []
    
    for (let i=1; i<=9; i+=3){
        const row = []
        for (let j=i; j<i+3; j++){
            row.push(j)
        }
        arr.push(row)
    }
    arr.push(['*',0,'#'])
    return arr
}

const findDist = (x,y, matrix)=>{
    
    let tempX, tempY
    for (let i=0; i<4; i++){
        for (let j=0; j<3; j++){
            if (matrix[i][j]===x){
                tempX =  [i, j]
            }
            if (matrix[i][j]===y){
                tempY = [i, j]
            }
        }
    }

    return (Math.abs(tempX[0]-tempY[0]) + Math.abs(tempX[1]-tempY[1]))
}

function solution(numbers, hand) {
    var answer = '';
    const left = [1,4,7]
    const right = [3,6,9] 
    hand==='right'? hand = 'R' : hand='L'
    
    const matrix = makeMatrix()
    
    const current = ['*','#']
    numbers.forEach((num,idx)=>{
        if (left.includes(num)){
            answer += 'L'
            current[0] = num
        }
        else if(right.includes(num)){
            answer += 'R'
            current[1] = num
        }
        else {
            const lDist = findDist(num, current[0], matrix)
            const rDist = findDist(num, current[1], matrix)
            
            if (lDist>rDist){
                answer += 'R'
                current[1] = num
            } 
            else if (lDist===rDist){
                answer += hand
                if (hand==='R') current[1] = num
                else current[0] = num
            } 
            else{
                answer += 'L'
                current[0] = num
            } 
        }
    })
    
    
    return answer;
}