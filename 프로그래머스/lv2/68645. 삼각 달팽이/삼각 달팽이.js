function solution(n) {
    var answer = [];
    
    const arr = Array(n).fill(null).map((_, idx) => Array(idx+1).fill(0));
    // console.log(arr)
    const delta = [[1,0],[0,1],[-1,-1]]
    let d = 0
    let num = 1
    const N = (n+1)*n/2
    let [x, y] = [-1,0]
    while(num <= N) {
        const [dx, dy] = delta[d]
        const [nx, ny] = [x+dx, y+dy]
        if (arr[nx] && arr[nx][ny] === 0) {
            arr[nx][ny] = num++
            x = nx
            y = ny
        } else {
            d = (d+1)%3
        }
    }
    
    return arr.flat();
}