function solution(routes) {
    var answer = 1;
    routes.sort((a,b)=>a[1]-b[1])
    const l = routes.length
    // console.log(routes)
    
    let cam = routes[0][1]
    for (let i=1; i<l; i++) {
        const [s, e] = routes[i]
        
        if (cam >= s && cam <= e) {
            continue
        } else {
            cam = e
            answer ++
        }
    }
    
    return answer;
}