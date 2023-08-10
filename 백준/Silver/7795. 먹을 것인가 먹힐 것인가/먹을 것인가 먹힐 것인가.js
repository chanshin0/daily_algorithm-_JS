const filePath = process.platform === "linux" ? "/dev/stdin" : "./testcase.txt";
let input = require('fs').readFileSync(filePath).toString().split('\n')
// console.log(input)

let i =0
let T = +input[i++]
while(T--) {
  const [N, M] = input[i++].split(' ').map(Number)
  const A = input[i++].split(' ').map(Number).sort((a,b)=>a-b)
  const B = input[i++].split(' ').map(Number).sort((a,b)=>a-b)
 
  let answer = 0
  let idx = 0
  A.forEach(a=>{

    if (a > B.at(-1)) {
      answer += M
      return
    }

    for (let j=idx; j<M; j++) {
      if (a <= B[j]) {
        answer += j
        idx = j
        break
      }
    }
  })
  console.log(answer)
}