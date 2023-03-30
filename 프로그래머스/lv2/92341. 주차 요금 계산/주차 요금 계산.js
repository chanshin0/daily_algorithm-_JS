function solution(fees, records) {
    
    const obj = {}
    
    for (record of records){
        let [time, num, inOut] = record.split(' ')
        time = time.split(':').map(v=>Number(v))
        const totalMin = time[0]*60 + time[1]
 
        if (obj[num]) obj[num] = [...obj[num], totalMin]
        else obj[num] = [totalMin]
    }
    // console.log(obj)
    
    const maxV = 24*60 - 1
    for (key in obj){
        const values = obj[key]
        let total = 0
        values.forEach((val, idx)=>{
            if (idx%2) return
            if (values[idx+1]) total += (values[idx+1]-val)
            else total += (maxV-val)
        })
        
        const [freeTime, defaultFee, min, fee] = fees.map(v=>Number(v))
        const remain = total-freeTime 
        if (remain <=0){
            obj[key] = defaultFee
            continue
        } 
        const calcFee = Math.ceil(remain/min)*fee + defaultFee
        obj[key] = calcFee
    }
    
    let arr = Object.entries(obj)
    arr = arr.sort((a,b)=>a[0]-b[0]).map(v=>v[1])
    
    return arr;
}