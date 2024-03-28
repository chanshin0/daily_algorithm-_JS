const filePath = process.platform === "linux" ? "/dev/stdin" : "./testcase.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .split("\n");

const arr = input.map(Number).sort((a, b) => a - b);
console.log(arr);

let [s, e] = [0, 6];
let sum = 0;

const answer = [];
for (let i = 0; i < 3; i++) {

}
