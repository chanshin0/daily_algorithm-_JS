const filePath = process.platform === "linux" ? "/dev/stdin" : "./testcase.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .split("\n");

const N = +input.shift()  
input = input.map(v=>v.split(' ').map(Number)).sort((a,b)=>a[0]-b[0])

const maxH = [...input].sort((a,b)=>b[1]-a[1])[0][1]

console.log(input, maxH);

const [s, e] = [input[0][0], input.at(-1)[0]]

for (let i=s; i<=e; i++) {
  
}

// 왼쪽에서 출발, 
// 자기보다 높이가 높거나 같은 막대 만나면 이동한 면적++, 다시 출발
// 오른쪽 끝에 도달하면 자기 막대영역만 ++, 인덱스 기록 후 종료
// 오른쪽에서 출발, 저장한 인덱스에 도달할 때까지 이동.

