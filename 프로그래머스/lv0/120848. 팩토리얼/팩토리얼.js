function solution(n) {
    let k = 1;
    for(let i =1; i<12; i++){
        k *= i;
        if(k>n){
            return i - 1
        }
    }
}