const filePath = process.platform === "linux" ? "/dev/stdin" : "./testcase.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .split("\n");

const N = +input.shift();
input = input.map((v) => v.split(" ").map(Number));
// console.log(input);

const arr = Array(N).fill(0);

for (let i = 1; i < N; i++) {
  arr[i] = arr[i - 1] + getDistance(input[i - 1], input[i]);
}
// console.log(arr);

let answer = Infinity;
for (let i = 1; i < N - 1; i++) {
  const left = arr[i - 1];
  const right = arr[N - 1] - arr[i + 1];
  const d = left + getDistance(input[i - 1], input[i + 1]) + right;
  answer = Math.min(answer, d);
}

console.log(answer);

function getDistance([si, sj], [ei, ej]) {
  return Math.abs(si - ei) + Math.abs(sj - ej);
}
