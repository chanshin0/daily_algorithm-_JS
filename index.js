const filePath = process.platform === "linux" ? "/dev/stdin" : "./testcase.txt";
let input = require('fs').readFileSync(filePath).toString().replace(/\r/g, '').split('\n')
// console.log(input)

const [n, m] = input.shift().split(' ').map(Number)
const area = Array.from({length:n}, ()=>input.shift().split(' ').map(Number))

const visited = Array.from({length:n}, ()=>Array.from({length:m}, ()=>0))
const delta = [[0,1],[1,0],[0,-1],[-1,0]]

let paint = 0
let maxV = 0
area.forEach((row, i)=>{
  row.forEach((col, j)=>{
    if (col === 1 && !visited[i][j]) {
      paint ++
      maxV = Math.max(maxV, dfs(i, j))
    }
  })
})

console.log(paint)
console.log(maxV)

function dfs(i, j) {
  visited[i][j] = 1

  let cnt = 1
  for (const [di, dj] of delta) {
    const [ni, nj] = [i+di, j+dj]
    if (area[ni] !== undefined && area[ni][nj] === 1 && !visited[ni][nj]) {
      cnt += dfs(ni, nj)
    } 
  }

  return cnt
}