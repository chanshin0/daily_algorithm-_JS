function getCombinations(arr, selectNum) {
  const results = [];
  if (selectNum === 1) {
    return arr.map((value) => [value]);
  }
    
  arr.forEach((value, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNum - 1);
    const attached = combinations.map((combination) => [value, ...combination]);
    results.push(...attached);
  });

  return results;
}

function solution(orders, course) {
    var answer = [];
    
    for (const selectNum of course) {
        
        let map = new Map()
        
        for (let order of orders) {
            if (order.length < selectNum) continue
            
            order = order.split('').sort()
            const cbList = getCombinations(order, selectNum)
            
            for (let cb of cbList) {
                cb = cb.join('')
                map.set(cb, (map.get(cb)||0)+1)
            }
        }
        
        if (map.size===0) continue
        
        map = [...map].sort((a,b)=>b[1]-a[1])
        // console.log(map)
        
        let maxV = map[0][1]
        if (maxV<2) continue 
        
        map.forEach(ele=>{
            if (ele[1]===maxV) answer.push(ele[0])
        })
         
    }
    
    return answer.sort()
}