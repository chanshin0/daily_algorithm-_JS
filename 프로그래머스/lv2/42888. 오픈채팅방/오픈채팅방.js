function solution(record) {
    var answer = [];

    const actions = {
        Enter:'들어왔습니다.',
        Leave:'나갔습니다.',
    }

    const user = new Map()

    for (const r of record){
        const [action, id, nickname] = r.split(' ')


        if(action!=='Leave'){
            user.set(id, nickname)
        }

        if (action!=='Change'){
            const message = [id, `님이 ${actions[action]}`]
            answer.push(message)
        }
    }

    answer = answer.map(v=>{
        v[0] = user.get(v[0])
        return v.join('')
    })

    return answer;
}