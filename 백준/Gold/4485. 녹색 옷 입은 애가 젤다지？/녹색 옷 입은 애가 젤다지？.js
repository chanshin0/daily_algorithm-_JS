let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
// let input = require('fs').readFileSync('testcase copy.txt').toString().split('\n')
// console.log(input)

const delta = [[0,1],[1,0],[0,-1],[-1,0]]

let t = 1
let i = 0
while (true) {  
  const N = +input[i++]
  if (N === 0) return
  const area = Array.from({length:N}, ()=>input[i++].split(' ').map(Number))
  // console.log(N, area)

  const visited = Array.from({length:N}, ()=>Array(N).fill(Infinity))
  visited[0][0] = area[0][0]
  const que = [[0,0]]
  while (que.length) {
    const [si, sj] = que.shift()
      
    for (const [di, dj] of delta) {
      const [ni, nj] = [si+di, sj+dj]

      if (area[ni] !== undefined && area[ni][nj] !== undefined && visited[ni][nj] > visited[si][sj] + area[ni][nj]) {
        visited[ni][nj] = visited[si][sj] + area[ni][nj]
        que.push([ni, nj])
      }
    }
    // console.log(visited)
  }
  console.log(`Problem ${t++}:`, visited[N-1][N-1])
}
