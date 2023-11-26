const filePath = process.platform === "linux" ? "/dev/stdin" : "./testcase.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .split("\n");
// console.log(input);

const [N, M] = input[0].split(" ").map(Number);
// console.log(N, M);

const seq = [];
let results = "";
const visited = Array.from({ length: M + 1 }, () => false);
dfs(0);
console.log(results);

function dfs(depth) {
  if (depth === M) {
    return (results += seq.join(" ") + "\n");
  }

  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    seq.push(i);
    dfs(depth + 1);
    seq.pop();
    visited[i] = false;
  }
}
