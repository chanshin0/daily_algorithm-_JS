function solution(nums) {
    var answer = 0;
    
    function isPrime (n) {
        if (n === 1) return 0
        
        for (let i=2; i <= ~~(n**0.5); i++) {
            if (n%i === 0) return 0
        }
        
        return 1
    }
    
    function comb (idx=0, arr=[]) {
        if (arr.length === 3) {
            const sum = arr.reduce((acc, curr)=>acc+curr, 0)
            if (isPrime(sum)) {
                answer ++
            } 
            return
        }
        
        for (let i=idx; i<nums.length; i++) {
            comb(i+1, [...arr, nums[i]])
        }
    }
    comb()
    
    return answer;
}