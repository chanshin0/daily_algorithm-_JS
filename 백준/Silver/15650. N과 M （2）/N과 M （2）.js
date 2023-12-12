const filePath = process.platform === "linux" ? "/dev/stdin" : "./testcase.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .split("\n");
// console.log(input);

const [N, M] = input[0].split(" ").map(Number);
let answer = ''

const used = Array.from({length:N+1}, ()=>0)

function makeSequence(seq=[]) {
  if (seq.length === M) {
    answer += seq.join(' ') + '\n'
    return
  }

  for (let i=1; i<=N; i++) {
    if (used[i]) continue
    if (seq.length && seq.at(-1) > i) continue
    used[i] = 1
    makeSequence([...seq, i])
    used[i] = 0
  }
}

makeSequence()
console.log(answer)