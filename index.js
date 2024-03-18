const filePath = process.platform === "linux" ? "/dev/stdin" : "./testcase.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .split("\n");

input = input.map(Number);
// console.log(input);
// const N = +input.shift();
// input = input.map((v) => v.split(" ").map(Number));
// console.log(N, input);

const arr = [0];
let i = 1;
while (arr.length < 1000000) {
  if (!isRepeated(i)) {
    arr.push(i);
  }
  i++;
}

const answer = [];
while (true) {
  const t = input.shift();
  if (t === 0) break;
  answer.push(arr[t]);
}

console.log(answer.join("\n"));

function isRepeated(n) {
  if (n <= 10) return false;

  const set = new Set();
  const copy = n.toString().split("");

  for (let i = 0; i < copy.length; i++) {
    if (set.has(copy[i])) {
      return true;
    } else {
      set.add(copy[i]);
    }
  }

  return false;
}
