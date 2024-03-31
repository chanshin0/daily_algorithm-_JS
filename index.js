const filePath = process.platform === "linux" ? "/dev/stdin" : "./testcase.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

// console.log(input);

const n = +input.shift();
const obj = {};
input.forEach((v) => {
  const [a, b] = v.split(" ").map(Number);
  obj[a] = b;
});
// console.log(obj);
const arr = Object.keys(obj).sort((a, b) => a - b);

let answer = 0;
let [l, r] = [arr[0], arr[arr.length - 1]].map(Number);
let now = l;
let size = obj[l];
while (true) {
  const next = obj[l + 1];

  if (next && next <= obj[now]) {
    size += obj[now];
    l++;
  } else if (next && next > obj[now]) {
    answer += size;
    now = ++l;
    size = obj[now];
  } else {
    if (l < r) {
      size += obj[now];
      l++;
    } else {
      answer += obj[now];
      break;
    }
  }
}

l = now;
now = r;
size = obj[r];
while (n > 1 && l !== r) {
  const prev = obj[r - 1];

  if (r - 1 > l && prev && prev <= obj[now]) {
    size += obj[now];
    r--;
  } else if (r - 1 > l && prev && prev > obj[now]) {
    answer += size;
    now = --r;
    size = obj[now];
  } else {
    if (r - 1 > l) {
      size += obj[now];
      r--;
    } else {
      answer += size;
      break;
    }
  }
}

console.log(answer);
