function solution(bandage, health, attacks) {
    
    let hp = health     // 현재 체력    
    let t = 0           // 붕대감기 시작한 시간
    
    while(attacks.length) {
        const [at, dmg] = attacks.shift()
        
        // 공격받은 후 남은 체력
        let remainHp = getCurrentHp(t, at, hp, health, bandage) - dmg
        console.log(at, dmg)
        console.log('남은체력 :', remainHp)
        if (remainHp <= 0 ) {
            return -1
        } else {
            hp = remainHp
            t = at+1
        } 
    }
    
    return hp;
}

const getCurrentHp = (s, e, hp, maxHp, bandage) => {
    let currentHp = hp
    let rest = e-s
    const bonusHeal = Math.floor(rest/bandage[0]) * bandage[2]
    
    currentHp = Math.min(maxHp, currentHp + (rest * bandage[1]))
    
    // 휴식시간이 회복 시전시간보다 같거나 길면 -> 추가 회복
    if (rest >= bandage[0]) {
        currentHp = Math.min(maxHp, currentHp + bonusHeal)
    } 
    
    return currentHp
}