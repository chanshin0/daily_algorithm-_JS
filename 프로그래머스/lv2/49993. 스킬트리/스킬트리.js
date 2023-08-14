function solution(skill, skill_trees) {
    var answer = 0;
    
    const obj = {}
    skill.split('').forEach((v, idx)=>{
        obj[v] = {
            'need' : skill[idx-1],
            'get' : false 
        }
    })
    
    skill_trees.forEach(cases=>{
        let flag = true
        
        for (let i=0; i<cases.length; i++) {
            const v = cases[i]
            // console.log(cases, v)
            if (!obj.hasOwnProperty(v)) continue
            
            const need = obj[v]['need']
            // console.log('need : ',need)
            if (need === undefined || obj[need]['get'] === true) {
                obj[v]['get'] = true
            } else {
                flag = false
                break;
            }
        }
        
        if (flag) {
            answer ++
        }
        
        for (const key in obj) {
            obj[key]['get'] = false
        }
        
    })
    
    return answer;
}