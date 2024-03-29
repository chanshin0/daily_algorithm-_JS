const filePath = process.platform === "linux" ? "/dev/stdin" : "./testcase.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

// console.log(input);

const n = +input[0];

const arr = Array(n + 1).fill(true);
arr[1] = false;
arr[0] = false;

for (let i = 2; i <= n ** 0.5; i++) {
  if (arr[i]) {
    for (let j = 2; j * i <= n; j++) {
      arr[i * j] = false;
    }
  }
}

const decimals = [];
arr.forEach((v, i) => {
  if (v) {
    decimals.push(i);
  }
});
// console.log(decimals);

let answer = decimals.includes(n) ? 1 : 0;
let [s, e] = [0, 1];
let sum = decimals[0] + +decimals[1];
while (s < e && e < decimals.length) {
  // console.log(s, e, sum);
  if (sum > n) {
    if (e - s === 1) {
      break;
    }
    sum -= decimals[s++];
  } else if (sum < n) {
    sum += decimals[++e];
  } else {
    answer++;
    sum -= decimals[s++];
  }
}

console.log(answer);
