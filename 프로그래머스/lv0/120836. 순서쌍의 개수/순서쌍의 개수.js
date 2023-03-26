function solution(n) {
   let left = 1;
    let right = n;
    let count = 0;
    while(right > 0){
        if(left * right === n) {
            count++;
            left++;
            right--;
        }else if(left * right > n){
            right--;
        }else{
            left++
        }

    }
    return count;
}