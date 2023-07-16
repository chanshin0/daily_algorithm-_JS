function solution(numbers) {
    numbers = numbers.map(v=>v.toString())
    
    numbers.sort((a,b)=>{
        const [aNum, bNum] = [+(a+b), +(b+a)]
        return bNum-aNum
    })
    
    return numbers[0]==="0"? "0" : numbers.join('');
}