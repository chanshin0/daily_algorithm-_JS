const 진수진수 = (n,k)=>{
    
    const arr = []
    while (n){
        const 몫 = Math.floor(n/k)
        const 나머지 = n%k
        n = 몫
        arr.unshift(나머지)
    }
    return arr.join('')
}

const isPrime = (num)=> {
  if (num <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

function solution(n, k) {
    let answer = 0
    const newNum = 진수진수(n,k).split('0')
    
    for (numStr of newNum){
        if (isPrime(Number(numStr))) answer ++
    }
    
    return answer;
}