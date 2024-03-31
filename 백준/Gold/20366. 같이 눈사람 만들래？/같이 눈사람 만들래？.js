const filePath = process.platform === "linux" ? "/dev/stdin" : "./testcase.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

// console.log(input);

const n = +input[0];
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = Infinity;

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    const a = arr[i] + arr[j]; // 눈사람a의 키

    let [bs, be] = [0, arr.length - 1];
    while (bs === i || bs === j) bs++;
    while (be === i || be === j) be--;

    while (bs < be) {
      const b = arr[bs] + arr[be];  //눈사람 b의 키
      // console.log(i, j, bs, be, a, b);
      if (a > b) {
        bs++;
        while (bs === i || bs === j) bs++;
      } else if (a < b) {
        be--;
        while (be === i || be === j) be--;
      } else {
        console.log(0);
        return;
      }

      answer = Math.min(answer, Math.abs(a - b));
    }
  }
}

console.log(answer);
