const filePath = process.platform === "linux" ? "/dev/stdin" : "./testcase.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

console.log(input);

const n = +input.shift();
const obj = {};
input.forEach((v) => {
  const [a, b] = v.split(" ").map(Number);
  obj[a] = b;
});
console.log(obj);
